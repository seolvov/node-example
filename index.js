import express from "express"

const app = express()
const port = 8080

app.get("/test", (req, res) => {
    res.json({
        msg: "test api"
    })
})
app.listen(port, console.log("server started"))