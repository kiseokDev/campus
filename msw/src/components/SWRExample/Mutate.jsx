import axios from "axios";
import React from "react";
import useSWR, { SWRConfig, useSWRConfig } from "swr";
export default function Mutate() {
  return (
    <SWRConfig>
      <Page />
      <Profile />
    </SWRConfig>
  );
} //123
const fetcher = url => axios.get(url).then(res => res.data);

const Page = () => {
  const { data } = useSWR("/api/user/123", fetcher);
  const { mutate } = useSWRConfig();

  if (!data) {
    return <div>loading...</div>;
  }
  //1234
  return (
    <div>
      <h1>My name is {data.name}.</h1>
      <button
        onClick={async () => {
          const newName = data.name.toUpperCase();
          dothis();
          // 데이터를 업데이트하기 위해 API로 요청을 전송
          // mutate({ ...data, name: newName },false)
          // 로컬 데이터를 즉시 업데이트하고 갱신(refetch)
          // 노트: 미리 바인딩 되었으므로 useSWR의 뮤테이트를 사용할 때는 key가 요구되지 않음
          mutate("/api/user/123", { ...data, name: newName }, false);

          function dothis() {
            console.log(123);
            console.log(12345);
          }
        }}
      >
        Uppercase my name!
      </button>
    </div>
  );
};
const Profile = () => {
  const { data, mutate } = useSWR("/api/user/123", fetcher);

  if (!data) {
    return <div>loading...</div>;
  }

  return (
    <div>
      <h1>My name is {data.name}.</h1>
      <button
        onClick={async () => {
          const newName = data.name.toUpperCase();
          // 데이터를 업데이트하기 위해 API로 요청을 전송
          // mutate({ ...data, name: newName },false)
          // 로컬 데이터를 즉시 업데이트하고 갱신(refetch)
          // 노트: 미리 바인딩 되었으므로 useSWR의 뮤테이트를 사용할 때는 key가 요구되지 않음
          mutate({ ...data, name: newName }, false);
          mutate();
        }}
      >
        Uppercase my name!
      </button>
    </div>
  );
};
