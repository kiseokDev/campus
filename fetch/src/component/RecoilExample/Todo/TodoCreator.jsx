import React, { useState } from "react";
import { useSetRecoilState } from "recoil";
import { todoListState } from "./TodoStore";

export default function TodoCreator() {
  const [inputValue, setInputValue] = useState("");
  const setTodoList = useSetRecoilState(todoListState);
  const onChange = ({ target: { value } }) => {
    setInputValue(value);
  };
  const addItem = () => {
    setTodoList(oldTodoList => [
      ...oldTodoList,
      {
        id: getId(),
        text: inputValue,
        isCompleted: false,
      },
    ]);
    setInputValue("");
  };
  return (
    <div>
      <input type="text" value={inputValue} onChange={onChange} />
      <button onClick={addItem}>Add</button>
    </div>
  );
}
let id = 0;
function getId() {
  return id++;
}
