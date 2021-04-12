import React from 'react';
import {useSelector} from "react-redux";
import profile from '../assets/SVG/user_phote.png'
import icon from '../assets/SVG/icon.svg'
const Profile = () => {
    const task=useSelector(({tasks})=>tasks)
    return (
        <div id="profiles">
            <div className="profile_data">
                <div style={{borderRadius: "50px 0 0 0", display: "flex", alignItems: "center"}}>
                    <img src={profile} alt="user" style={{width: '60px', margin: "15px"}}/>
                    <div>
                        <p>Good Morning,</p>
                        <h2>Sara!</h2>
                    </div>
                </div>
            </div>
            <div id="profile_tasks_done">
                <div id="task_container">
                    <div id="add_todo_btn" onClick={() => {
                        document.getElementById("todo_content").style.display='flex'
                    }}><h2 id="addTask">Add a Task</h2></div>
                    <br/>
                    <div><h2>&#9898; Wireframe for contact page</h2></div>
                    <br/>
                    <div style={{flexDirection:"column"}}><h2 style={{marginBottom:"6px"}}>&#9898;Book Return Ticket</h2><p style={{fontSize:"15px"}}>Today</p></div>
                    <br/>
                    <div style={{flexDirection:"column"}}><h2 style={{marginBottom:"6px"}}>&#9898;Buy Anniversary Gift</h2><p style={{fontSize:"15px"}}>3 Days ago</p></div>
                    <br/>
                    <div><h2>Pay Electricity Bill</h2></div><br/>
                    <div style={{flexDirection:"column"}}><h2 style={{marginBottom:"6px"}}>&#9898;Meet Chris In the Confrence</h2><p style={{fontSize:"15px"}}>Tomorrow</p></div>
                    <br/>
                </div>
                <div id="completed">
                    <div style={{display:"flex",justifyContent:"space-between",width:'85%',alignItems:"center",marginTop:'20px'}}>
                        <h2>Completed</h2>
                        <div id="completed_text"><img src={icon} style={{width:"15px",transform:"rotate(270deg)"}} alt='icon'/></div>
                    </div>
                    <div style={{width:"100%",marginLeft:"none"}}>
                        {task.map(Value=>{
                            console.log(Value)
                            if(Value.status === 1){
                                return <li key={Value.todo.toString()}>{Value.todo}</li>
                            }
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;
