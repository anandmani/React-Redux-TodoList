import {combineReducers} from 'redux';
import todoElements from "./todoElements.js";
import visibility from "./visibility.js";

// const allReducers = function(){
//   return combineReducers({
//
//   });
// }


//note the syntax

const allReducers = combineReducers({
    todoElements: todoElements,
    visibility: visibility
});

export default allReducers;
