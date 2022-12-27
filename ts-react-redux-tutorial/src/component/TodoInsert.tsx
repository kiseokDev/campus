import React, { ChangeEvent, FormEvent, useState } from "react";

type TodoInsertProps = {
  onInsert: (text: string) => void;
};

const TodoInsert = ({ onInsert }: TodoInsertProps) => {
  const [todoText, setTodoText] = useState("");
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTodoText(e.target.value);
  };
  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    onInsert(todoText);
    setTodoText("");
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        placeholder="할 일을 입력하세요."
        value={todoText}
        onChange={onChange}
      />
      <button type="submit">등록</button>
    </form>
  );
};
export default TodoInsert;
