import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import TestTodoItem from "./TestTodoItem";

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case "SHOW_ALL":
      return todos;
    case "SHOW_COMPLETED":
      return todos.filter(t => t.isCompleted);
    case "SHOW_ACTIVE":
      return todos.filter(t => !t.isCompleted);
    default:
      return todos;
  }
};

export default function TestTodoList() {
  const todoList = useSelector(state => state.todos);
  const visibilityFilter = useSelector(state => state.visibilityFilter);
  const fileterdList = getVisibleTodos(todoList, visibilityFilter);

  return (
    <>
      {fileterdList.map(item => (
        <TestTodoItem key={item.id} item={item} />
      ))}
    </>
  );
}
