import React from "react";
import { useRecoilState } from "recoil";
import { todoListState } from "./TodoStore";

const replaceItemAtIndex = (list, index, newItem) => {
  return [...list.slice(0, index), newItem, ...list.slice(index + 1)];
};
const removeItemAtIndex = (list, index) => {
  return [...list.slice(0, index), ...list.slice(index + 1)];
};
export default function TodoItem({ item }) {
  const [todoList, setTodoList] = useRecoilState(todoListState);
  const index = todoList.findIndex(eachItem => eachItem === item);

  const editItemText = ({ target: { value } }) => {
    //Update
    const newList = replaceItemAtIndex(todoList, index, {
      ...item,
      text: value,
    });
    setTodoList(newList);
  };

  const toggleItemCompletion = () => {
    //Toggle checkbox
    const newList = replaceItemAtIndex(todoList, index, {
      ...item,
      isComplete: !item.isComplete,
    });
    setTodoList(newList);
  };

  const deleteItem = () => {
    //delete
    const newList = removeItemAtIndex(todoList, index);
    setTodoList(newList);
  };
  return (
    <div>
      <input type="text" value={item.text} onChange={editItemText}></input>
      <input
        type="checkbox"
        checked={item.isComplete}
        onChange={toggleItemCompletion}
      ></input>
      <button type="button" onClick={deleteItem}>
        x
      </button>
    </div>
  );
}
