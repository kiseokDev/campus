import React from "react";
import { useDispatch } from "react-redux";
import {
  toggleTodo,
  removeTodo,
  editTodo,
} from "../../features/todo/testTodoSlice";
export default function TestTodoItem({ item }) {
  const dispatch = useDispatch();
  const editTodoHandler = ({ target: { value } }) => {
    dispatch(editTodo({ ...item, text: value }));
  };

  return (
    <div>
      <input type="text" value={item.text} onChange={editTodoHandler} />
      <input
        type="checkbox"
        checked={item.isCompleted}
        onChange={() => dispatch(toggleTodo(item))}
      />
      <button
        type="button"
        onClick={() => {
          dispatch(removeTodo(item.id));
        }}
      >
        삭제
      </button>
    </div>
  );
}
