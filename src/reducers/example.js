//State argument is not application state, only the state this reducer is responsible for
//State = null is for the inital case. When undefined, set it to null 
export default function(state = null, action) {
  switch(action.type){
    case: 'BOOK_SELECTED';
      return action.payload;
  }
  return state;
}
