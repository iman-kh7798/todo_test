import React, {useEffect} from 'react';
import {useSelector} from "react-redux";
import axios from "axios";

const days = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
    11, 12, 13, 14, 15, 16, 17, 18
    , 19, 20, 21, 22, 23, 24, 25,
    26, 27, 28, 29, 30, 31]
const ContentCalender = () => {
    const todos = useSelector(({tasks}) => tasks)
    useEffect(() => {
        const elm = document.getElementById("grid_container").childNodes
        todos.map(tasks => {
            console.log(tasks.date.toString())
            const elm = document.getElementById(`item${tasks.date}`)
            const div = document.createElement('div')
            div.innerHTML = `<h1>${tasks.todo}</h1>`
            div.setAttribute("class", "tasks")
            div.setAttribute('id',`task${tasks.date}`)

            elm.appendChild(div)
            div.addEventListener("click",ev => {
                document.getElementById("addtocompleted").style.display="flex"
                document.getElementById("completedTask").addEventListener("click",ev1 => {
                    console.log(todos)
                    axios.post("/completed",JSON.stringify({todo:tasks.todo})
                        ,{headers:{
                                "Content-Type":"application/json"
                            }}).then(value => console.log("data sent"))
                    document.getElementById("addtocompleted").style.display="none"
                    window.location.replace('/')
                })
            })



        })
    })
    return (
        <div id="grid_container">

            <div className="days_on" style={{borderTop: "none"}}/>
               <div className="days_on" style={{borderTop: "none"}}/>
                <div className="days_on" style={{borderTop: "none"}}/>
                <div className="days_on" style={{borderTop: "none"}}/>
            {days.map((value, index) => {
                if (index < 7) {
                    if (index === 6) {
                        return <div id={"item" + index} key={value.toString()}
                                    style={{borderTop: "none", borderRight: "none"}}
                                    className="days_on"><h2 style={{marginTop: "20px"}}>{value}</h2></div>
                    }
                    return <div id={"item" + index} key={value.toString()} style={{borderTop: "none"}}
                                className="days_on">
                        <h2 style={{marginTop: "20px"}}>{value}</h2></div>

                }
                if (index === 30) {
                    return <div id={"item" + index} key={value.toString()}
                                style={{borderBottom: "none", borderRight: "none"}}
                                className="days_on"><h2 style={{marginTop: "20px"}}>{value}</h2></div>
                }
                if (index > 23) {
                    return <div id={"item" + index} key={value.toString()} style={{borderBottom: "none"}}
                                className="days_on"><h2
                        style={{marginTop: "20px"}}>{value}</h2></div>
                }
                if (index === 12 || 18 || 24) {
                    return <div id={"item" + index} key={value.toString()} style={{borderRight: "none"}}
                                className="days_on"><h2
                        style={{marginTop: "20px"}}>{value}</h2></div>
                }
                return <div id={"item" + index} key={value.toString()} className="days_on"><h2
                    style={{marginTop: "20px"}}>{value}</h2>
                </div>
            })}
            {/*    <div className="days_on" style={{borderTop: "none"}}><h2 style={{marginTop: "20px"}}>1</h2></div>*/}
            {/*    <div className="days_on" style={{borderTop: "none"}}><h2 style={{marginTop: "20px"}}>2</h2></div>*/}
            {/*    <div className="days_on" style={{borderRight: "none", borderTop: "none"}}><h2*/}
            {/*        style={{marginTop: "20px"}}>3</h2></div>*/}
            {/*    <div className="days_on"><h2 style={{marginTop: "20px"}}>4</h2></div>*/}
            {/*    <div className="days_on"><h2 style={{marginTop: "20px"}}>5</h2></div>*/}
            {/*    <div className="days_on"><h2 style={{marginTop: "20px"}}>6</h2></div>*/}
            {/*    <div className="days_on"><h2 style={{marginTop: "20px"}}>7</h2></div>*/}
            {/*    <div className="days_on"><h2 style={{marginTop: "20px"}}>8</h2></div>*/}
            {/*    <div className="days_on"><h2 style={{marginTop: "20px"}}>9</h2></div>*/}
            {/*    <div className="days_on" style={{borderRight: "none"}}><h2 style={{marginTop: "20px"}}>10</h2></div>*/}
            {/*    <div className="days_on"><h2 style={{marginTop: "20px"}}>11</h2></div>*/}
            {/*    <div className="days_on"><h2 style={{marginTop: "20px"}}>12</h2></div>*/}
            {/*    <div className="days_on"><h2 style={{marginTop: "20px"}}>13</h2></div>*/}
            {/*<div className="days_on"><h2 style={{marginTop: "20px"}}>14</h2></div>*/}
            {/*<div className="days_on">*/}
            {/*    <div className="tasks"><h1>Buy Anniversary Gift</h1></div>*/}
            {/*</div>*/}
            {/*<div className="days_on"><h2 style={{marginTop: "20px"}}>16</h2></div>*/}
            {/*<div className="days_on" style={{borderRight: "none"}}><h2 style={{marginTop: "20px"}}>17</h2></div>*/}
            {/*<div className="days_on">*/}
            {/*        <div className="current_day"><h2 >18</h2></div>*/}
            {/*        <div className="tasks"><h1>Book Return Ticket</h1></div>*/}
            {/*</div>*/}
            {/*<div className="days_on"><h2 style={{marginTop: "20px"}}>19</h2>*/}
            {/*    <div className="tasks"><h1>Meet Chris In the Confrence</h1></div></div>*/}
            {/*<div className="days_on"><h2 style={{marginTop: "20px"}}>20</h2></div>*/}
            {/*<div className="days_on"><h2 style={{marginTop: "20px"}}>21</h2></div>*/}
            {/*<div className="days_on"><h2 style={{marginTop: "20px"}}>22</h2></div>*/}
            {/*<div className="days_on"><h2 style={{marginTop: "20px"}}>23</h2></div>*/}
            {/*<div className="days_on" style={{borderRight: "none"}}><h2 style={{marginTop: "20px"}}>24</h2></div>*/}
            {/*<div className="days_on" style={{borderBottom: "none"}}><h2 style={{marginTop: "20px"}}>25</h2></div>*/}
            {/*<div className="days_on" style={{borderBottom: "none"}}><h2 style={{marginTop: "20px"}}>26</h2></div>*/}
            {/*<div className="days_on" style={{borderBottom: "none"}}><h2 style={{marginTop: "20px"}}>27</h2></div>*/}
            {/*<div className="days_on" style={{borderBottom: "none"}}><h2 style={{marginTop: "20px"}}>28</h2></div>*/}
            {/*<div className="days_on" style={{borderBottom: "none"}}><h2 style={{marginTop: "20px"}}>29</h2></div>*/}
            {/*<div className="days_on" style={{borderBottom: "none"}}><h2 style={{marginTop: "20px"}}>30</h2></div>*/}
            {/*<div className="days_on" style={{borderBottom: "none", borderRight: "none"}}>*/}
            {/*    <h2 style={{marginTop: "20px"}}>31</h2>*/}
            {/*</div>*/}


        </div>
    );
};

export default ContentCalender;
