import React,{useState,useEffect} from 'react';
import './assets/styles.scss'
import axios from "axios";
function App() {
const [state,setState]=useState({name:"",lastName:"",mail:"",password:"",reEnteredPass:""})
    const onFormSubmit=(e)=>{
        e.preventDefault()
        if(state.password!==state.reEnteredPass){
            const elm=document.getElementById('form_title')
            const err=document.createElement("h4")
            const errText=document.createTextNode("do not match")
            err.appendChild(errText)
            elm.appendChild(err)
        }else {
            // axios.post('http://localhost:3000',{data:"salammmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm"}).then(value => console.log('data sent'))
            console.log('khodafez')
        }
    }
    return (
        <>
            <form onSubmit={onFormSubmit} autoComplete="on">
                <h3 id="form_title">لطفا اطلاعات مورد نظر را با دقت کامل نمایید</h3>
                <input type="text" placeholder="نام" value={state.name}
                       onChange={event => setState({...state,name:event.target.value})}
                required={true}/>
                <input type="text" placeholder="نام خانوادگی" value={state.lastName}
                       onChange={event => setState({...state,lastName:event.target.value})}
                       required={true}/>
                <input type="email" placeholder="ایمیل" value={state.mail}
                       onChange={event => setState({...state,mail:event.target.value})}
                       required={true}/>
                <input type="password" placeholder="رمز" value={state.password}
                       onChange={event => setState({...state,password:event.target.value})}
                       required={true}/>
                <input type="password" placeholder="تکرار رمز" value={state.reEnteredPass}
                       onChange={event => setState({...state,reEnteredPass:event.target.value})}
                       required={true}/>
                <input type="submit" value="ارسال"/>
            </form>
        </>
    );
}

export default App
