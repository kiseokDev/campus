import logo from "./logo.svg";
import "./App.css";
import TestTodoList from "./Component/ReduxTodoList/TestTodoList";
import TestTodoCreator from "./Component/ReduxTodoList/TestTodoCreator";
import TestTodoFilter from "./Component/ReduxTodoList/TestTodoFilter";
import Users from "./Component/Login/Users";
import UsersWithReactAsync from "./Component/Login/UsersWithReactAsync";

function App() {
  return (
    <div className="App">
      {/* <Users /> */}
      <br />
      {/* <UsersWithReactAsync /> */}
      <TestTodoFilter />
      <br />
      <TestTodoCreator />
      <br />
      <TestTodoList />
    </div>
  );
}

export default App;
