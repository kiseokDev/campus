import React from "react";
import { useRecoilValue } from "recoil";
import TodoCreator from "./TodoCreator";
import TodoItem from "./TodoItem";
import TodoListFilters from "./TodoListFilters";
import TodoListStats from "./TodoListStats";
import { filteredTodoListState } from "./TodoStore";

export default function TodoList() {
  const todoList = useRecoilValue(filteredTodoListState);

  return (
    <div>
      <TodoListStats />
      <TodoListFilters />
      <TodoCreator />
      {todoList.map(item => (
        <TodoItem key={item.id} item={item} />
      ))}
    </div>
  );
}
