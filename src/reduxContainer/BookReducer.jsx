import { buy_Book } from "./BookTypes";

const initialState = {
  numberofbooks: 20,
};

const BookReducer = (state = initialState, action) => {
  switch (action.type) {
    case buy_Book:
      return {
        ...state,
        numberofbooks: state.numberofbooks - 1, // Corrected this line
      };
    default:
      return state;
  }
};
export default BookReducer;
