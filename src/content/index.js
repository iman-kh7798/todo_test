import React from 'react';
import "./assets/reset.css"
import './assets/styles.scss'
import Profile from "./includes/Profile";
import Calendar from "./includes/calendar";
import AddToDO from "./includes/AddToDO";
import fetchData from './reducers/actions'


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
function LoadData(store)
{
     store.dispatch(fetchData())
}
export default {
    component:App,
    LoadData
}
