import React from "react";
import { useState } from "react";
import { useReducer } from "react";
const Item = ({ name, age }) => {
  return (
    <li>
      name : {name} / age: {age}
    </li>
  );
};
export default function TestMocking() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const handleClick = () => {
    fetch(
      "https://raw.githubusercontent.com/techoi/raw-data-api/main/simple-api.json"
    )
      .then(response => {
        return response.json();
      })
      .then(json => {
        if (json.errorMessage) {
          throw new Error(json.errorMessage);
        }
        setData(json.data);
      })
      .catch(error => {
        setError(`something is WOrng : ${error}`);
      });
  };
  if (error) {
    return <p>{error}</p>;
  }
  return (
    <div>
      <button onClick={handleClick}>데이터 가져오기</button>
      {data && (
        <ul>
          {data.people.map(person => (
            <Item
              key={`${person.name}-${person.age}`}
              name={person.name}
              age={person.age}
            ></Item>
          ))}
        </ul>
      )}
    </div>
  );
}
