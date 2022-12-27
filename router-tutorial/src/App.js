import logo from "./logo.svg";
import "./App.css";
import { Link, Route, Routes } from "react-router-dom";
import About from "./About";
import Home from "./Home";
import Profile from "./Profile";
import Profiles from "./Profiles";
import HIstorySample from "./HIstorySample";

function App() {
  return (
    <div className="App">
      <ul>
        <li>
          <Link to="/">홈</Link>
        </li>
        <li>
          <Link to="/about">소개</Link>
        </li>
        <li>
          <Link to="/profiles">프로필 목록</Link>
        </li>
        <li>
          <Link to="/history">history 예제</Link>
        </li>
      </ul>
      <hr />
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/about" element={<About />}></Route>
        <Route exact path="/profiles/*" element={<Profiles />}></Route>
        <Route exact path="/history" element={<HIstorySample />}></Route>
      </Routes>
    </div>
  );
}

export default App;
