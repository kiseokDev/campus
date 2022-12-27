import React from "react";
import { Link, NavLink, Route, Routes } from "react-router-dom";
import Profile from "./Profile";
import WithRouterSample from "./WithRouterSample";

export default function Profiles() {
  return (
    <div>
      <h3>유저 목록:</h3>
      <ul>
        <li>
          <NavLink
            to="/profiles/velopert"
            style={({ isActive }) => ({ color: isActive ? "black" : "yellow" })}
          >
            velopert
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/profiles/gildong"
            style={({ isActive }) => ({ color: isActive ? "black" : "yellow" })}
          >
            {" "}
            gildong
          </NavLink>
        </li>
      </ul>
      <Routes>
        <Route path="/*" exact render={<div>유저를 선택해주세요.</div>} />
        <Route exact path=":username" element={<Profile />}></Route>
      </Routes>
    </div>
  );
}
