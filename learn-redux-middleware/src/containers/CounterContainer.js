import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decrease,
  decreaseAsync,
  increase,
  increaseAsync,
} from "../modules/counter";
import Counter from "../components/Counter";

export default function CounterContainer() {
  const number = useSelector(state => state.counter);
  const dispatch = useDispatch();

  const onIncrease = () => {
    dispatch(increaseAsync());
  };
  //   const onDecrease = () => dispatch(decrease());
  const onDecrease = () => {
    dispatch(decreaseAsync());
  };

  return (
    <Counter number={number} onIncrease={onIncrease} onDecrease={onDecrease} />
  );
}
