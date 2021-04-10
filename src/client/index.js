import '@babel/register'
import React from "react";
import {Provider} from "react-redux";
import ReactDOM from 'react-dom'
import {createStore,applyMiddleware} from "redux";
import thunk from "redux-thunk";
import {renderRoutes} from "react-router-config";
import reducers from '../content/reducers'
import Routes from "../Routes";
import {BrowserRouter} from 'react-router-dom'
const store= createStore(reducers,window.INITIAL_STATE,applyMiddleware(thunk))
ReactDOM.hydrate(
    <Provider store={store}>
    <BrowserRouter>
        {renderRoutes(Routes)}
    </BrowserRouter>
    </Provider>, document.getElementById('root')
)
