import React from "react";
import { observableTodoStore } from "../app/observableTodoStore";
import { todoStore } from "../app/todoStore";

export default function MobxExample() {
  const run = () => {
    todoStore.addTodo("read MobX tutorial");
    console.log(todoStore.report());

    todoStore.addTodo("try MobX");
    console.log(todoStore.report());

    todoStore.todos[0].completed = true;
    console.log(todoStore.report());

    todoStore.todos[1].task = "try MobX in own project";
    console.log(todoStore.report());

    todoStore.todos[0].task = "grok MobX tutorial";
    console.log(todoStore.report());
  };
  const runObs = () => {
      observableTodoStore.addTodo("try MobX");
      observableTodoStore.addTodo("read MobX tutorial");
    observableTodoStore.todos[0].completed = true;
    observableTodoStore.todos[1].task = "try MobX in own project";
    observableTodoStore.todos[0].task = "grok MobX tutorial";
  };
  return (
    <div>
      <button onClick={run}>run code</button>
      <button onClick={runObs}>run Obs code</button>
    </div>
  );
}
