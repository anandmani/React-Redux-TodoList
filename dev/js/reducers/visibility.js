export default function(state = "show all", action){
  console.log("inside reducer modify visibility state");
  switch(action.type){
    case "setting visibility":
      console.log("Showing all");
      return action.payload;
    break;

    default:
      console.log("Default.");
      return state;
    break;
  }
}
