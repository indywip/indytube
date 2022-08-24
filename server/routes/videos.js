import express from 'express'
import { addVideo, updateVideo, deleteVideo, getVideo, addView, trend, random, sub, search, getByTag } from "../controllers/video.js"
import { verifyToken } from '../verifyToken.js'

const router = express.Router()

// create video
router.post('/', verifyToken, addVideo)

// update video
router.put('/:id', verifyToken, updateVideo)

// delete video
router.delete('/:id', verifyToken, deleteVideo)

// retrieve video
router.get('/find/:id', getVideo)

// add views
router.put('/view/:id', addView)

// view trending videos
router.get('/trend', trend)

// view random videos
router.get('/random', random)

// view subscribed channel videos
router.get('/sub', verifyToken, sub)

// search video by title
router.get('/search', search)

// search video by tags
router.get('/tags', getByTag)

export default router