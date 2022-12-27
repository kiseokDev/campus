import React from "react";
import axios from "axios";
import useSWR from "swr";
const fetcher = (...args) => axios.get(...args).then(res => res.data);

function useUser(id) {
  const { data, error } = useSWR(`/api/user/${id}`, fetcher);

  return {
    user: data,
    isLoading: !error && !data,
    isError: error,
  };
}

export default function Page() {
  return (
    <div>
      <Profile id={124} />
      <Avatar id={124} />
    </div>
  );
}
export function Profile({ id }) {
  const { user, isLoading, isError } = useUser(id);

  if (isError) return <div>faile to load</div>;
  if (isLoading) return <div>loading...</div>;

  return (
    <>
      <div>hello {user.name}!</div>
      <Avatar id={123333} />
    </>
  );
}

export function Avatar({ id }) {
  const { user, isLoading, isError } = useUser(id);

  if (isLoading) return <div>faile to load (Avator)</div>;
  if (isError) return <div>loading... (Avator)</div>;

  return <div>hello {user.name}! (Avator)</div>;
}
