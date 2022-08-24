import Comment from '../models/comment.js'
import Video from '../models/video.js'
import { createError } from '../error.js'

// add a comment
export const addComment = async (req, res, next) => {
    const newComment = new Comment({ ...req.body, userId: req.user.id })
    try {
        const savedComment = await newComment.save()
        res.status(200).send(savedComment)
    } catch(err) {
        next(err)
    }
}

// delete a comment
export const deleteComment = async (req, res, next) => {
    try {
        const comment = await Comment.findById(req.params.id)
        const video = await Video.findById(req.params.id)
        if (req.user.id === comment.userId || req.user.id === video.userId) {
            await Comment.findByIdAndDelete(req.params.id)
            res.status(200).send("Comment deleted!")
        } else {
            return next(createError(403, 'You cannot delete this comment'))
        }
    } catch(err) {
        next(err)
    }
}

// retrieve comments
export const getComments = async (req, res, next) => {
    try {
        const comments = await Comment.find({ videoId: req.params.videoId })
        res.status(200).json(comments)
    } catch(err) {
        next(err)
    }
}

// edit comment
export const editComment = async (req, res, next) => {
    try {
        const comment = await Comment.findById(req.params.id)
        
        if (req.user.id === comment.userId) {
            const updatedComment = await Comment.findByIdAndUpdate(req.params.id, { 
                 $set: req.body 
            },
            { new: true })
            res.status(200).json(updatedComment)
        } else {
            return next(createError(403, 'You cannot edit this comment'))
        }
    } catch(err) {
        next(err)
    }
}