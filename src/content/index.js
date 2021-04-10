import React from 'react';
import "./assets/reset.css"
import './assets/styles.scss'
import Profile from "./includes/Profile";
import Calendar from "./includes/calendar";
import AddToDO from "./includes/AddToDO";


function App() {
    return (
        <main style={{width:'80%',height:"600px"}}>
            <AddToDO/>
            <div id="container" style={{display:'flex'}}>
                <Profile/>
                <Calendar/>
            </div>
        </main>
    );
}

export default {
    component:App
}
