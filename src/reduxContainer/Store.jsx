import { createStore } from "redux";
import BookReducer from "./BookReducer";

//here createStore accept reducer as a parameter so therefore i import reducer on top then in parameter
const store = createStore(BookReducer);

export default store;
