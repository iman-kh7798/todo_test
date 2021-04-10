import React from 'react';

const AddToDO = () => {
    return (
        <div id="todo_content">
            <h1>Please insert a ToDO Content</h1>
            <div style={{display:"flex",flexDirection:"column",width:"100%"}}>
                <div style={{margin:"20px"}}>
                    <p>Date</p>
                    <div>
                        <label>2019 / 10 / </label>
                    <input style={{width:"20%"}}/></div>
                </div>
                <div style={{margin:"20px"}}>
                    <p>Task</p>
                    <input style={{width:"100%"}}/>
                </div>
                <div style={{margin:"20px"}}>
                    <input type="submit" value="submit"/>
                    <input onClick={event => document.getElementById('todo_content').style.display="none"} type="submit" value="close"/>
                </div>
            </div>
        </div>
    );
};

export default AddToDO;
