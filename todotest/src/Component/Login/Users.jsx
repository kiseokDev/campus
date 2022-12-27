import axios from "axios";
import React, { useState } from "react";
import useAsync from "../CustomHook/userAsync";

async function getUsers() {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/users"
  );
  return response.data;
}

export default function Users() {
  const [userId, setUserId] = useState(null);
  const [state, refetch] = useAsync(getUsers, []);
  const { error, data: users, loading } = state;
  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>{error.toString()}</div>;
  }
  if (!users) {
    return <div>No users</div>;
  }
  return (
    <>
      <ul>
        {users.map(user => (
          <li
            key={user.id}
            onClick={() => setUserId(user.id)}
            style={{ cursor: "pointer" }}
          >
            {user.username} ({user.name})
          </li>
        ))}
      </ul>
      <button onClick={refetch}>Refetch</button>
      {userId && <User id={userId} />}
    </>
  );
}

async function getUser(id) {
  const response = await axios.get(
    `https://jsonplaceholder.typicode.com/users/${id}`
  );
  return response.data;
}
function User({ id }) {
  const [state] = useAsync(() => getUser(id), [id]);
  const { loading, data: user, error } = state;
  if (loading) return <div>로딩중...</div>;
  if (error) return <div>에러 발생</div>;
  if (!user) return null;
  return (
    <div>
      <h2>{user.username}</h2>
      <p>
        <b>Email:</b> {JSON.stringify(user.email)}
      </p>
    </div>
  );
}
