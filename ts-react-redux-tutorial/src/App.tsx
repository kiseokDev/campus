import React from "react";
import logo from "./logo.svg";
import "./App.css";
import CounterContainer from "./containers/CounterContainer";
import TodoApp from "./containers/TodoApp";

function App() {
  return (
    <>
      <CounterContainer />
      <TodoApp />
    </>
  );
}

export default App;
