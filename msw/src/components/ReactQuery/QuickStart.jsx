import React from "react";
import { useMutation, useQuery, useQueryClient } from "react-query";
import GlobalLoader from "./GlobalLoader";
import { getTodos, postTodo } from "./my-api";

export default function QuickStart() {
  const queryClient = useQueryClient();
  const query = useQuery("todos", getTodos);
  const mutation = useMutation(postTodo, {
    onSuccess: () => {
      queryClient.invalidateQueries("todos");
    },
  });
  const data = mutation.data; // then 으로 넘겨받은 fetcher 데이터

  if (query.isLoading) {
    return <p>Loading...</p>;
  }
  return (
    <div>
      <GlobalLoader />
      <ul>
        {query.data.map(todo => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
      <button
        onClick={() => {
          mutation.mutate({
            id: Date.now(),
            title: "learn React Query",
          });
        }}
      >
        AddClick
      </button>
    </div>
  );
}
