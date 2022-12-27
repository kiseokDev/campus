import axios from "axios";
import React from "react";
import {
  atom,
  selector,
  selectorFamily,
  useRecoilState,
  useRecoilValue,
  useRecoilValueLoadable,
  useSetRecoilState,
} from "recoil";
import ErrorBoundary from "./ErrorBoundary";

const currentUserIDState = atom({
  key: "CurrentUserID",
  default: 2,
});

// const tableOfUsers = [{ name: "jimmy" }, { name: "choi" }];

// const currentUserNameState = selector({
//   key: "CurrentUserName",
//   get: ({ get }) => {
//     return tableOfUsers[get(currentUserIDState)].name;
//   },
// });

const currentUserNameQuery = selector({
  key: "CurrentUserName",
  get: async ({ get }) => {
    const response = await axios.get(
      `/api/user-name?id=${get(currentUserIDState)}`
    );
    return response.data.name;
  },
  cachePolicy_UNSTABLE: { eviction: "most-recent" },
});
// const currentUserNameQuery = selectorFamily({
//   key: "CurrentUserName",
//   get: id => async () => {
//     const response = await axios.get(`/api/user-name?id=${id}`);
//     return response.data.name;
//   },
// });

// function CurrentUser({ userID }) {
//   const userName = useRecoilValue(currentUserNameQuery(userID));
//   // return <div>{userName}</div>;
//   // const userName = useRecoilValueLoadable(currentUserNameQuery(2));
//   if (userName.state === "loading") {
//     return <div>loading...</div>;
//   }
//   if (userName.state === "hasError") {
//     return <div>Somthing wrong...</div>;
//   }
//   return <div>{userName}</div>;
// }

function CurrentUser({ userID }) {
  const userName = useRecoilValue(currentUserNameQuery);
  return (
    <>
      <ErrorBoundary>
        <div>currentUser: {userName}</div>
      </ErrorBoundary>
    </>
  );
}

export default function CurrentUserInfo() {
  const [id, setId] = useRecoilState(currentUserIDState);
  return (
    <>
      <React.Suspense fallback={<div>loading...</div>}>
        <CurrentUser userID={3} />
      </React.Suspense>
      <br />
      <input type="text" value={id} onChange={e => setId(e.target.value)} />
    </>
  );
}
