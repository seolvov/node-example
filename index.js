import express from "express"
import cors from "cors"
import morgan from "morgan"
import bodyParser from "body-parser";

import productRoute from "./routes/product.js"

const app = express()
const port = 8080

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
app.listen(port, console.log("server started"))