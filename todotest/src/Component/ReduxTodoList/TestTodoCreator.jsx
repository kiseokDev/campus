import React, { useState } from "react";
import { addTodo } from "../../features/todo/testTodoSlice";
import { useDispatch } from "react-redux";
import { useInput } from "../CustomHook/useInput";
export default function TestTodoCreator() {
  const dispatch = useDispatch();

  const [inputValue, setInputValue, handler] = useInput("");

  const addTodoHandler = () => {
    dispatch(addTodo(inputValue));
    setInputValue("");
  };

  return (
    <div>
      <input type="text" value={inputValue} onChange={handler} />
      <button onClick={addTodoHandler}>추가하기</button>
    </div>
  );
}
