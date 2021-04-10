import {createStore,applyMiddleware} from "redux";
import thunk from 'redux-thunk'
import reducers from "../content/reducers";
function createServerStore(){
    const store=createStore(reducers,{},applyMiddleware(thunk));
    return store;
}
export default createServerStore
