//this reducer accept two arguments: 1st-> default state 2nd => object contains type and payload

//this reducer func is a pure func, we can't change the state directly
export function myReducer(state, action){
  switch(action.type){
   case "increase": {
     const newState = [...state];
     const productToUpdate = newState.find(
      (product) => product.id === action.payload
     );
     productToUpdate.qty = productToUpdate.qty + 1;
     console.log(newState);
     return newState;
   }
   case "decrease": {
    const newState = [...state];
    const productToUpdate = newState.find(
      (product) => product.id === action.payload
    );
    productToUpdate.qty = productToUpdate.qty - 1;
    return newState;
}

default:
  break;
}
}