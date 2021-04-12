import '@babel/polyfill'
import React from "react";
import express from 'express'
import html from './server'
import bodyParser from 'body-parser'
import sqlConnection from "./server/sqlConnection";
const PORT=process.env.PORT || 3000
const app=express()
import createServerStore from "./server/createStore";
import {matchRoutes} from "react-router-config";
import Routes from "./Routes";

app.use(express.static('public'))
app.get('/fetch',(req, res) => {
    sqlConnection.query('SELECT * FROM tasks',(err,result,fields)=>{
        res.status(200).send(result)
    })
})

app.get('*',(req, res) => {
    const store=createServerStore()
    const promise=matchRoutes(Routes,req.path).map(({route})=>{
        return route.LoadData?route.LoadData(store) : null;
    })
    Promise.all(promise).then(()=>{
        res.send(html(req,store))
    })

})
app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(bodyParser.json({type:"application/json"}))
app.post('/api',(req, res) => {
    res.status(200).send('')
    sqlConnection.query(`INSERT INTO tasks(todo, date, status)` +
        ` VALUES (?,?,?)`,[req.body.todo,req.body.date-1,0])

})
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json({type:"application/json"}))
app.post("/completed",(req, res) => {
    res.status(200).send('')
    sqlConnection.query("UPDATE tasks SET status = 1 WHERE todo = ? ",[req.body.todo])
})

app.listen(3000,() => {
    console.log(`running on port ${PORT}`)
})
