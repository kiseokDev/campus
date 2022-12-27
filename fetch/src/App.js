import "./App.css";
import { observableTodoStore } from "./app/observableTodoStore";
import Counter2 from "./component/Counter2";
import MobxExample from "./component/MobxExample";
import TestMocking from "./component/TestMocking";
// import TodoList from "./component/TodoList";

import Counter from "./features/counter/Counter";
import { RecoilRoot } from "recoil";
import FontButton from "./component/RecoilExample/FontButton";
import Text from "./component/RecoilExample/Text";
import { CharacterCounter } from "./component/RecoilExample/CharacterCounter";
import TodoList from "./component/RecoilExample/Todo/TodoList";
import Test from "./component/Temp/Test";
import PromiseTest from "./component/Temp/PromiseTest";
import CurrentUserInfo from "./component/RecoilExample/Todo/CurrentUserInfo";

function App() {
  return (
    <div className="App">
      {/* <PromiseTest /> */}
      {/* <Test /> */}
      {/* <TestMocking /> */}
      {/* <Counter /> */}
      {/* <br /> */}
      {/* <br /> */}
      {/* <br /> */}
      {/* <br /> */}
      <Counter2 />
      {/* <MobxExample /> */}
      {/* <TodoList store={observableTodoStore} /> */}
      {/* <RecoilRoot> */}
      {/* <FontButton />
        <Text />
        <CharacterCounter /> */}
      {/* <TodoList /> */}
      {/* <CurrentUserInfo /> */}
      {/* </RecoilRoot> */}
    </div>
  );
}

export default App;
