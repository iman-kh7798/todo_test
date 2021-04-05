import React from "react";
import express from 'express'
import html from './server'


const PORT=process.env.PORT || 3000
const app=express()
app.use(express.static('public'))


app.get('*',(req, res) => {
    res.send(html())
})
// app.post('*',(req, res) => {
//     res.send(console.log("damet garm"))
//
// })
app.listen(PORT,() => {
    console.log(`running on port ${PORT}`)
})
