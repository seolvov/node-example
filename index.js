import express from "express"
import cors from "cors"
import morgan from "morgan"

const app = express()
const port = 8080

app.use(cors())
app.use(morgan('dev'))
app.get("/test", (req, res) => {
    res.json({
        msg: "test api"
    })
})
app.listen(port, console.log("server started"))