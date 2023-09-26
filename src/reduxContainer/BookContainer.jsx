import React from "react";
import { useDispatch, useSelector } from "react-redux";
import purchase_book from "./BookAction"; // Change this to import the action correctly

function BookContainer() {
  //USEsELECTOR HOOK IS MAINLY USED TO ACCESS  STATE (WHICH IS IN REDUX STORE)IN OUR COMPONENTS
  //1)This hook takes a selector function as an argument. The selector is called with the store state.
  //2)here selector function (state)returns a value
  //3)useSelector(state => state.numberofbooks) line means ita a state where we PUT TOTAL books numbers which is this line on BookReducer.jsx/initialState ----->    numberofbooks: 20,
  const noOfBooks = useSelector((state) => state.numberofbooks);
  //use dispatch for doing action and for updating state
  const dispatch = useDispatch();

  return (
    <>
      <h1>Books Container</h1>
      <h2>No of Books - {noOfBooks}</h2>
      <button onClick={() => dispatch(purchase_book())}>Buy Book</button>
    </>
  );
}

export default BookContainer;
