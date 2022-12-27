import React from "react";

export default function Counter({ number, onIncrease, onDecrease }) {
  return (
    <div>
      <h1>{number}</h1>
      <button
        onClick={() => {
          onIncrease();
        }}
      >
        increase
      </button>
      <button
        onClick={() => {
          onDecrease();
        }}
      >
        decrase
      </button>
    </div>
  );
}
