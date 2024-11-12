import { BUY_CAKE } from "./cakeTypes";
const initalState ={
    numOfCakes:  10,
}
const cakeReducer = (state = initalState,action) => {
    switch(action.type) {
        case BUY_CAKE: return{
            ...state, // return what every the current state 
            numOfCakes:state.numOfCakes-1 // return the number of current cake after customer buy the cake
        };
        default : state;
    }
}

export default cakeReducer;