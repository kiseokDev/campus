import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import TodoInsert from "../component/TodoInsert";
import TodoList from "../component/TodoList";
import { RootState } from "../modules";
import { addTodo, removeTodo, toggleTodo } from "../modules/todos";

export default function TodoApp() {
  const todos = useSelector((state: RootState) => state.todos);
  const dispatch = useDispatch();
  const onInsert = (text: string) => {
    dispatch(addTodo(text));
  };
  const onToggle = (id: number) => {
    dispatch(toggleTodo(id));
  };
  const onRemove = (id: number) => {
    dispatch(removeTodo(id));
  };
  return (
    <>
      <TodoInsert onInsert={onInsert} />
      <TodoList todos={todos} onToggle={onToggle} onRemove={onRemove} />
    </>
  );
}
