require("dotenv").config()
const express=require("express")
const cors=require("cors")
const connect = require("./db/connect.db")
const userRoute=require("./routes/user.route")
const app=express()
app.use(express.json())
app.use(cors())

app.get("/",(req,res)=>{
    try {
        res.status(200).send("Welcome to DIL")
    } catch (error) {
        res.send(500).send("error",error)
    }
})

app.use("/user",userRoute)

app.listen(process.env.PORT,async()=>{
    await connect()
    console.log("server is running on ",process.env.PORT )
})

