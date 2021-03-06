import {combineReducers} from "redux";
import {FETCH_SUCCESS} from "./actions";

function fetchDataReducer(state=null,action){
    if(action.type===FETCH_SUCCESS){
        return action.payload
    }
    return state
}


export default combineReducers({
    tasks:fetchDataReducer
})
