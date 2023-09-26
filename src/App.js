// import logo from './logo.svg';
import "./App.css";
//here provider act as a react redux which is used to connect our application with redux
import { Provider } from "react-redux";
import store from "./reduxContainer/Store";
//import bookcontainer
import BookContainer from "./reduxContainer/BookContainer";

function App() {
  return (
    //here {store} value is used as props bcz here we connect our store with our react application
    <Provider store={store}>
      <div className="App">
        <BookContainer />
      </div>
    </Provider>
  );
}

export default App;
