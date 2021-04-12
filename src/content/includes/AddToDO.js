import React, {useEffect, useState} from 'react';
import {useSelector} from "react-redux";
import axios from "axios";
const AddToDO = () => {
    useEffect(() => console.log(date))
    const [date, setDate] = useState("")
    const [todo, setToDo] = useState("")
    const todos = useSelector(({tasks})=>tasks)
    const handleSubmit=(e)=>{
        e.preventDefault()
        axios.post("/api",JSON.stringify({date:date,todo:todo})
            ,{headers:{
                    "Content-Type":"application/json"
                }}).then(value => console.log("data sent"))
        window.location.replace('/')
    }

    return (
        <div id="todo_content">
            <h1>Please insert a ToDO Content</h1>
            <div style={{display: "flex", flexDirection: "column", width: "100%"}}>
                <form onSubmit={handleSubmit}>
                    <div style={{margin: "20px"}}>
                        <p>Date</p>
                        <div>
                            <label>2019 / 10 / </label>
                            <input type="number" max="31" min="0" style={{width: "20%"}} value={date}
                                   onChange={event => setDate(event.target.value)} required={true}/>
                        </div>
                    </div>
                    <div style={{margin: "20px"}}>
                        <p>Task</p>
                        <input type="text" style={{width: "100%"}} value={todo}
                               onChange={event => {
                                   setToDo(event.target.value)
                               }} required={true}/>
                    </div>
                    <div style={{margin: "20px"}}>
                        <input type="submit" value="submit"/>
                    </div>

                </form>
                <input onClick={() => document.getElementById('todo_content').style.display = "none"}
                       type="submit" value="close" style={{marginLeft:'18px'}}/>
            </div>
        </div>
    )
}

export default AddToDO;
