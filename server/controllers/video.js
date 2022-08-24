import { createError } from '../error.js'
import Video from '../models/video.js'
import User from '../models/user.js'

// create video
export const addVideo = async (req, res, next) => {
    const newVideo = new Video ({userId: req.user.id, ...req.body})
    try {
        const savedVideo = await newVideo.save()
        res.status(200).json(savedVideo)
    } catch(err) {
        next(err)
    }
}

// update video 
export const updateVideo = async (req, res, next) => {
    try {
        const video = await Video.findById(req.params.id)
        if (!video) return next(createError(404, 'Video not found'))

        if (req.user.id === video.userId) {
            const updatedVideo = await Video.findByIdAndUpdate(req.params.id, {
                $set: req.body
            },
            { new: true })
            res.status(200).json(updatedVideo)
        } else {
            return next(createError(403, 'You are not authorized to update this video'))
        }
    } catch(err) {
        next(err)
    }
}

// delete video
export const deleteVideo = async (req, res, next) => {
    try {
        const video = await Video.findById(req.params.id)
        if (!video) return next(createError(404, 'Video not found'))

        if (req.user.id === video.userId) {
            await Video.findByIdAndDelete(req.params.id)
        res.status(200).json("Video deleted!")
        } else {
            return next(createError(403, 'You are not authorized to delete this video'))
        }
    } catch(err) {
        next(err)
    }
}

// retrieve video
export const getVideo = async (req, res, next) => {
    try {
        const video = await Video.findById(req.params.id)
        res.status(200).json(video)
    } catch(err) {
        next(err)
    }
}

// add views
export const addView = async (req, res, next) => {
    try {
        await Video.findByIdAndUpdate(req.params.id, {
            $inc : { views: 1 }
        })
        res.status(200).json("A new viewer watched the video")
    } catch(err) {
        next(err)
    }
}

// retrieve trending videos
export const trend = async (req, res, next) => {
    try {
        const videos = await Video.aggregate([{ $sample: { size: 40 } }])
        res.status(200).json(videos)
    } catch(err) {
        next(err)
    }
}

// retrieve random videos
export const random = async (req, res, next) => {
    try {
        const videos = await Video.find().sort({ views: -1 })
        res.status(200).json(videos)
    } catch(err) {
        next(err)
    }
}

// retrieve subscribed channel videos
export const sub = async (req, res, next) => {
    try {
        const user = await User.findById(req.user.id)
        const subscribed = user.subscribedUsers

        const list = await Promise.all(
            subscribed.map((channelId) => {
                return Video.find({ userId: channelId })
            })
        )
        res.status(200).json(list.flat().sort((a, b) => b.createdAt - a.createdAt))
    } catch(err) {
        next(err)
    }
}

// search video by title
export const search = async (req, res, next) => {
    const title = req.query.q
    try {
        const videos = await Video.find({ 
            title: { $regex: title, $options: 'i' } 
        }).limit(40)
        res.status(200).json(videos)
    } catch(err) {
        next(err)
    }
}

// search video by tags
export const getByTag = async (req, res, next) => {
    const tags = req.query.tags.split(',')

    try {
        const videos = await Video.find({ tags: { $in: tags } }).limit(20)
        res.status(200).json(videos)
    } catch(err) {
        next(err)
    }
}