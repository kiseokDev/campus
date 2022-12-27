import React, { useState } from "react";
import "./button.css";

export default function Button() {
  const [isGreen, setIsGreen] = useState(true);
  return (
    <div>
      <button className="py-2 px-10 bg-green-500 text-red-400">Click me</button>
      <br />
      <button
        className={`py-2 px-10 bg-${
          isGreen ? "green" : "red"
        }-500 text-white  hover:bg-${
          isGreen ? "orange" : "red"
        }-100 focus:outline-none focus:ring-yellow-300 ring-opacity-75`}
        onClick={() => {
          setIsGreen(prev => !prev);
        }}
      >
        Click me
      </button>
      <br />
      <button className="py-2 px-10 bg-green-500 text-white font-semibold">
        Click me
      </button>
      <br />
      <button className="btn-blue">Click me</button>
      <br />
    </div>
  );
}
