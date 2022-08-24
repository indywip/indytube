import express from 'express'
import { addComment, deleteComment, getComments, editComment } from "../controllers/comment.js"
import { verifyToken } from '../verifyToken.js'

const router = express.Router()

// add a comment
router.post('/', verifyToken, addComment)

// delete a comment
router.delete('/:id', verifyToken, deleteComment)

// retrieve comments
router.get('/:videoId', getComments)

// edit comment
router.put('/:id', verifyToken, editComment)

export default router