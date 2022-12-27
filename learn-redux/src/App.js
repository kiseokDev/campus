import logo from "./logo.svg";
import "./App.css";
import CounterContainer from "./CounterContainer";
import TodosContainer from "./TodosContainer";

function App() {
  return (
    <div>
      <CounterContainer />
      <hr />
      <TodosContainer />
    </div>
  );
}

export default App;
