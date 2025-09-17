import express from "express"
import multer from "multer"

const PORT = process.env.PORT || 3000 ;
const app= express();

app.get('/' , (req, res) => {
    res.json({
        "type": "greeting",
        "value": "congrats sourav!"
    })
})

app.listen(PORT , (req, res) => {
    console.log(`server running on port : ${PORT}`)
})