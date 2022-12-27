import React from "react";
import { useDispatch } from "react-redux";
import { setFilterState } from "../../features/todo/testTodoFilterSlice";
export default function TestTodoFilter() {
  const dispatch = useDispatch();
  const updateFilter = ({ target: { value } }) => {
    dispatch(setFilterState({ type: "SET_FILTER_STATE", filter: value }));
  };
  return (
    <>
      Filter:
      <select onChange={updateFilter}>
        <option value="SHOW_ALL">모두보기</option>
        <option value="SHOW_COMPLETED">완료</option>
        <option value="SHOW_ACTIVE">미완료</option>
      </select>
    </>
  );
}
