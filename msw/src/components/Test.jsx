import React from "react";

export default function Test() {
  function getUser(obj, userName) {
    return g.next(userName);
  }
  const g = function* () {
    let user;
    user = yield getUser(g, "kisok");
    console.log(user);
  };
  g.next();

  return <div>Test</div>;
}
