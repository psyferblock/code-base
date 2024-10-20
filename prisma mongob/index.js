const cookieParser = require('cookie-parser')
const express = require('express')
import userRouter from "./routes/userRoutes"

require('dotenv').config()

const app = express()
// default middleware

app.use(express.json())
app.use(express.urlencoded)

// cookies
app.use(cookieParser    )

app.use('/api',userRouter)

app.get('/',(req,res)=>{
    res.send("from youtube")
})

app.listen(3000,()=>{
    console.log("server is running on port 3000")
})