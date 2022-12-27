import * as React from "react";

export interface GreetingsProps {
  name: string;
  mark: string;
  optional?: string;
  onClick: (name: string) => void;
}

export function Greetings({ name, mark, optional, onClick }: GreetingsProps) {
  const handleClick = () => onClick(name);
  return (
    <div>
      Hello, {name} {mark}
      {optional && <p>{optional}</p>}
      <div>
        <button onClick={handleClick}>Click Me</button>
      </div>
    </div>
  );
}

Greetings.defaultProps = {
  mark: "!",
};
