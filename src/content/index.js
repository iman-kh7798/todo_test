import React from 'react';
import "./assets/reset.css"
import './assets/styles.scss'
import Profile from "./includes/Profile";
import Calendar from "./includes/calendar";
import AddToDO from "./includes/AddToDO";
import fetchData from './reducers/actions'
import AddToCompleted from "./includes/AddToCompleted";

function App() {
    return (
        <main style={{width:'80%',height:"600px"}}>
            <AddToCompleted/>
            <AddToDO/>
            <div id="container_main">
            <div id="container" style={{display:'flex'}}>
                <Profile/>
                <Calendar/>
            </div>
            </div>
        </main>
    );
}
function LoadData(store)
{
   return store.dispatch(fetchData())
}
export default {
    component:App,
    LoadData
}
