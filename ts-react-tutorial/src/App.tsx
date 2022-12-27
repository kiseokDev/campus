import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Greetings } from "./Greeting";
import Counter from "./Counter";
import MyForm from "./MyForm";
import ReducerSample from "./ReducerSample";
import { SampleProvider } from "./SampleContext";

function App() {
  const onSubmit = (form: { name: string; description: string }) => {
    console.log(form);
  };
  return (
    <>
      {/* <ReducerSample />
      <MyForm onSubmit={onSubmit} />; */}
      <SampleProvider>
        <ReducerSample />
      </SampleProvider>
    </>
  );
}

export default App;
