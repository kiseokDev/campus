import { useState } from "react";

export function useInput(initialValue) {
  const [inputValue, setInputValue] = useState(initialValue);

  const hanlder = ({ target: { value } }) => {
    setInputValue(value);
  };
  return [inputValue, setInputValue, hanlder];
}
