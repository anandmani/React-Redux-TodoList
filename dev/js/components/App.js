import React, { Component } from 'react'
import {addAction} from "../actions/index.js";
import {toggleAction} from "../actions/toggleTodo.js";
import {visibilityAction} from "../actions/visibilityAction.js";
import { bindActionCreators } from 'redux'; //not react-redux
import { connect } from 'react-redux';


class App extends Component{
//implement constructor and bind methods
  addTodo(){
    // addAction(this.refs.todoInput.value); //Calling it this way will not make action trigger reducer. Need to do it the react way!
    this.props.addAction(this.refs.todoInput.value,this.props.todos);
    // this.refs.todoInput.value="";
  }

  createTodos(todo, index){
    console.log("inside create todos: "+JSON.stringify(todo, null, 4));
    // console.log(Object.assign({},todo,{status:"karab"})); //Just trying out object.assign
    if(this.props.visibility == "show all")
      return(<div key={index}  style={todo.status == "Done"?{textDecoration: "line-through"}:{textDecoration: "none"}} onClick={this.props.toggleAction.bind(null,todo)}>{todo.name}</div>);
    else //this.props.visibility == "show remaining"
      return(<div key={index}  style={todo.status == "Done"?{display: "none"}:{display: "block"}} onClick={this.props.toggleAction.bind(null,todo)}>{todo.name}</div>);
  }

  render(){
    // this.props.store.subscribe(this.render);
    console.log(this.state); // why does this not worknull,
    console.log("inside render"+this.props.todos);
    return(<div>
              <h1>Todo List</h1>
              <textArea ref="todoInput"/>
              <button onClick={this.addTodo.bind(this)}>+</button>
              {this.props.todos.map(this.createTodos.bind(this))}
              <button onClick={this.props.visibilityAction.bind(null,"show all")}>Show All</button>
              <button onClick={this.props.visibilityAction.bind(null,"show remaining")}>Show remaining</button>
           </div>);
  }//we use match state to props function instead of directly doing this.props.store.getState() because we dont need the whole state; Also, render is not called as soons as main state changes as main state is not state of this compoenent. thus we need mapStateToProps?
}//Although we pass store={store} as a prop to this component, we need to use mapStateToProps for component to render on state change. Some fuckery! This is because when the state changes, store does not change. store.getState() changes. but that getState() function as such remains the same.
function mapStateToProps(state){
  return{
    todos:state.todoElements,
    visibility: state.visibility
  }
}
function mapDispatchToProps(dispatch){
  return bindActionCreators({ addAction: addAction, toggleAction: toggleAction, visibilityAction: visibilityAction }, dispatch); //you return this
}

// export default connect(mapDispatchToProps)(App); //this does not work as first argument is mapStateToProps method
export default connect(mapStateToProps, mapDispatchToProps)(App);

// export default App;
