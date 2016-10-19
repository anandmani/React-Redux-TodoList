import 'babel-polyfill';
import React from 'react';
import ReactDOM from "react-dom";
import App from './components/App';
import { createStore } from 'redux';
// import todoElements from "./reducers/todoElements.js";
import allReducers from "./reducers/allReducers.js";

const store = createStore(allReducers);

ReactDOM.render(
    <App store = {store}/>,
    document.getElementById('root')
);
