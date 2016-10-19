export const toggleAction = function(todo){  //why cant i do export default function(). ----Can use export default. I just imported wrong
  console.log("toggling "+todo+ " index:"+todo.index);
  return {
    type: "toggling a todo",
    payload: Object.assign({},todo,{status: (todo.status=="Done")?"New":"Done"})
  }
}
