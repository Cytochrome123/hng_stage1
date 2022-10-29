require("dotenv").config()
const express = require('express');

const app = express();

app.get('/bio', (req,res) => {

    const userObj = {
        slackUsername: 'Ismail Hudhayfah',
        backend: true,
        age: 22,
        bio: 'I am Ismail Hudhayfah, a backend developer possionate in proferring solution to problems and working in a team to achieve the best possible outcome'
    }

    res.status(200).json(userObj)
})

app.listen(process.env.PORT || 8000  , ()=> console.log("Stage1_Started"))