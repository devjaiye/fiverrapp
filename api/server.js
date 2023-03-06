import dotenv from 'dotenv'
import express from 'express'
import mongoose, { connect } from 'mongoose'
import userRouter from "./routes/userRoute.js"
import conversationRoute from './routes/conversationRoute.js'
import gigRoute from './routes/gigRoute.js'
import messageRoute from './routes/messageRoute.js'
import orderRoute from './routes/orderRoute.js'
import reviewRoute from './routes/reviewRoute.js'
import authRoute from './routes/authRoute.js'
import cookieParser from 'cookie-parser'

dotenv.config()
const app = express()

//..middleware
app.use(express.json())
app.use(cookieParser())


    //..Routes
    app.use("/api/auth", authRoute)
    app.use("/api/users", userRouter)
    app.use("/api/conversation", conversationRoute)
    app.use("/api/gig", gigRoute)
    app.use("/api/message", messageRoute)
    app.use("/api/orders", orderRoute)
    app.use("/api/reviews", reviewRoute)

    //..error middleware 
    app.use((error, req, res, next)=>{
      const errorStatus = error.status || 500
      const errorMessage = error.message || "something went wrong..."

      return res.status(errorStatus).send(errorMessage)
    })


    try{
      await mongoose.connect(process.env.MONGO_URL)
        console.log("Connected to MongoDB successfully...")
    }catch(error){
      console.log(error)
    }


    

app.listen(8000, ()=> {
   
    console.log("Server is running...")
})