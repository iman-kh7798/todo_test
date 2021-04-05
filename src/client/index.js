import '@babel/register'
import React from "react";
import ReactDOM from 'react-dom'
import Content from '../content'

ReactDOM.hydrate(
    <div><Content/></div>,document.getElementById('root')
)
