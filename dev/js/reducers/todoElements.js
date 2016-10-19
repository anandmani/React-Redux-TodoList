export default function(state= [{name:"Eat dinner",status:"Done",index:0},{name:"Take medicine", status:"Done",index:1}] ,action){
  // if(typeof state == 'undefined'){ //can give default value in arguments in ES6. Giving state a default value is the only time we can change value of state. reducer must be a pure function.
  //   state=[{name:"Eat dinner",status:"Done"},{name:"Take medicine", status:"Done"}];
  // }
  console.log("Inside Reducer-modify todoElement; action payload: "+action.payload)

  switch(action.type){
    case "Adding a todo":
      return [...state,action.payload];
    break;

    case "toggling a todo":
      // console.log("need to toggle the value of index"+action.payload.index);
      // console.log("last cut at "+ +(action.payload.index+1)); //why the hell does this print 11 when action.payload.index = 1 and works fine everytime else?. this is because
      // console.log("whole state: "+state);
      // console.log("pre: "+state.slice(0,action.payload.index));
      // console.log("mid:"+action.payload);
      // console.log("post:"+state.slice(action.payload.index+1));
      // return state.slice(0,action.payload.index).concat([action].concat(state.slice(action.payload.index+1)));
      return (state.slice(0,action.payload.index).concat([action.payload])).concat(state.slice(+action.payload.index+1)); //+action.payload.index because, +action.payload is a string and we are type coercing it to int
    break;

    default:
      console.log("Default. action type = "+action.type);
    return state;
  }
}
