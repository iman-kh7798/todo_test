import React from "react";
import express from 'express'
import html from './server'
const PORT=process.env.PORT || 3000
const app=express()
import createServerStore from "./server/createStore";

app.use(express.static('public'))


app.get('*',(req, res) => {
    const store=createServerStore()
    res.send(html(req,store))
})

app.listen(3000,() => {
    console.log(`running on port ${PORT}`)
})
