import "./App.css";
import Counter from "./components/Dummy/Counter";
import ReactQueryExample from "./components/ReactQuery/Example";
import Cache from "./components/SWRExample/Cache";
import Fetcher from "./components/SWRExample/Fetcher";
import Mutate from "./components/SWRExample/Mutate";
import Profile from "./components/SWRExample/Profile";
import TestMocking from "./components/TestMocking";
import { QueryClient, QueryClientProvider } from "react-query";
import QuickStart from "./components/ReactQuery/QuickStart";
import { ReactQueryDevtools } from "react-query/devtools";
import Pagination from "./components/ReactQuery/Pagination";
import InfiniteSroll from "./components/ReactQuery/InfiniteScroll";
import Test from "./components/Test";
const queryClient = new QueryClient();
function App() {
  return (
    <div className="App">
      <Test />
      {/* <Counter /> */}
      {/* <TestMocking /> */}
      {/* <Profile /> */}
      {/* <Cache /> */}
      {/* <Fetcher /> */}
      {/* <Pagination /> */}
      {/* <Mutate /> */}
      <QueryClientProvider client={queryClient}>
        {/* <ReactQueryExample /> */}
        {/* <QuickStart /> */}
        {/* <Pagination /> */}
        {/* <InfiniteSroll /> */}
        {/* <ReactQueryDevtools initialIsOpen={false} /> */}
      </QueryClientProvider>
    </div>
  );
}

export default App;
