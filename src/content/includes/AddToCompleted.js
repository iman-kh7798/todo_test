import React from 'react';

const AddToCompleted = () => {
    return (
        <div id="addtocompleted">
            <div>
                <h1>this task has been done!!!</h1>
            </div>
            <div style={{display:"flex",justifyContent:"space-between"}}>
                <input type={"submit"} id="completedTask" value="yes" style={{width:"80px"}}/>
                <input type={"submit"} onClick={event =>  document.getElementById("addtocompleted").style.display="none"} value="no" style={{width:"80px"}}/>
            </div>
        </div>
    );
};

export default AddToCompleted;
