export const visibilityAction = function(visibility){
  console.log("Inside fucnction visibility action; visibility: "+visibility);
  return {
    type: "setting visibility",
    payload: visibility
  }
}
