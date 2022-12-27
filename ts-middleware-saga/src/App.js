import logo from "./logo.svg";
import "./App.css";
import CounterContainer from "./containers/CounterContainer";
import PostListContainer from "./containers/PostListContainer";
import { Route, Routes } from "react-router-dom";
import PostListPage from "./pages/PostListPage";
import PostPage from "./pages/PostPage";
import GithubProfileLoader from "./components/GithubProfileLoader";

function App() {
  return (
    <>
      {/* <CounterContainer /> */}
      <Routes>
        <Route path="/" element={<PostListPage />} exact={true} />
        <Route path=":id" element={<PostPage />} />
      </Routes>
      {/* <GithubProfileLoader /> */}
    </>
  );
}

export default App;
