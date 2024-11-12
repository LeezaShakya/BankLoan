//old way without tool kit
import { createStore } from "@reduxjs/toolkit";
//creating the intial state of the application
const initalState = {
  balance: 0,
  loan: 0,
  loanPurpose: "",
};

//creating the reducer function which takes state and action to give new state with all the changes

function reducer(state = initalState, action) {
  switch (action.type) {
    case "account/depoist":
      return { ...state, balance: state.balance + action.payload };
    case "account/withdraw":
      if (state.loan > 0) return state;
      return { ...state, balance: action.payload };
    case "account/requestloan":
      return { ...state,balance: state.balance + action.payload.amount, loan: state.loan + action.payload.amount ,loanPurpose : action.payload.purpose};
    case "account/paidloan":
      return {
        ...state,
        balance: state.balance - state.loan,
        loan: 0,
        loanPurpose: "",
      };
    default:
      return state;
  }
}

//Action Creator

function deposit (amount){
    return{type:"account/depoist", payload:amount}
}
function withdraw (amount) {
    return{type :"account/withdraw",payload:amount}
}
function requestloan(amount,purpose){
    return{type :"account/requestloan",payload:{amount:amount , purpose: purpose}}
}
function paidloan() {
    return{type :"account/paidloan"}
}

// creating store

const store = createStore(reducer);

//dispatch the action to the store
store.dispatch(deposit(500));//this is done with action creator
store.dispatch({type:"account/depoist",payload:500}); //this is donw without creating the action creator

//gets the current state of the store
console.log (store.getState())

store.dispatch (requestloan(1000,"Buy Car"))
console.log (store.getState())


