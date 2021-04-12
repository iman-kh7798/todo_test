import {createStore,applyMiddleware} from "redux";
import thunk from 'redux-thunk'
import reducers from "../content/reducers";
import axios from "axios";
function createServerStore(){
    const Axios=axios.create({
        baseURL:'http://localhost:3000',
        headers:{"Content-Type":"application/json"}
    })
    const store=createStore(reducers,{},applyMiddleware(thunk.withExtraArgument(Axios)));
    return store;
}
export default createServerStore
