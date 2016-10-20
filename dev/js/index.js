import 'babel-polyfill';
import React from 'react';
import ReactDOM from "react-dom";
import App from './components/App';
import { createStore } from 'redux';
// import todoElements from "./reducers/todoElements.js";
import allReducers from "./reducers/allReducers.js";

const store = createStore(allReducers);

//Note: we have not used Provider here as a wrapper to App. Therefore, store is only visible in App. If App had children components, we need to pass store as a prop again. Instead use Provider.
//Note: Provider will not provider Store as a prop. But it will enable us to use mapStateToProps and get state value.
ReactDOM.render(
    <App store = {store}/>,
    document.getElementById('root')
);
