import express from "express"
import cors from "cors"
import morgan from "morgan"
import bodyParser from "body-parser";
import dotEnv from "dotenv"

import connectDB from "./config/database.js";
import productRoute from "./routes/product.js"

dotEnv.config()

const app = express()
// const port = 8080
const port = process.env.PORT || 9090

connectDB()

app.use(cors())
app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extends: false}))

app.use("/product", productRoute)
app.get("/test", (req, res) => {
    res.json({
        msg: "test api"
    })
})
// app.listen(port, console.log("server started"))
app.listen(port, console.log(`server started at ${port}`))