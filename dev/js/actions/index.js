export const addAction =  function(todoName,todoList){
  console.log("inside action "+todoName);
  console.log("Length of todo list"+todoList.length);
  return {
    type: "Adding a todo",
    payload: {
              name:todoName,
              status:"New",
              index:todoList.length
              }
  }
};
