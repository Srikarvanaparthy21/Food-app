import express from 'express'
// import { logInUser,registerUser } from '../controllers/UserController.js'
import { logInUser,registerUser } from '../controllers/UserController.js'

const userRouter = express.Router()

userRouter.post('/register',registerUser)
userRouter.post('/login',logInUser)

export default userRouter;