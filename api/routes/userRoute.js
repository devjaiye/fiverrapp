import express from 'express'
import { deleteUser } from '../controllers/usersController.js'
import { verifyToken } from '../middleware/jwt.js'

const userRouter = express.Router()

userRouter.delete("/:id", verifyToken, deleteUser)

export default userRouter