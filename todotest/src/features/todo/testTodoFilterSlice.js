import { createSlice } from "@reduxjs/toolkit";
import { act } from "react-dom/test-utils";
const initialStateMap = {
  SHOW_ALL: "SHOW_ALL",
  SHOW_COMPLETED: "SHOW_COMPLETED",
  SHOW_ACTIVE: "SHOW_ACTIVE",
};

const initialState = initialStateMap.SHOW_ALL;

export const testTodofilterSlice = createSlice({
  name: "todoFilterState",
  initialState: initialState,
  reducers: {
    setFilterState: (state, action) => {
      return action.payload.filter;
      //   console.log(action);
      //   switch (action.payload.type) {
      //     case "SET_FILTER_STATE":
      //       return action.payload.filter;
      //     default:
      //       return state;
      //   }
    },
  },
});
export const { setFilterState } = testTodofilterSlice.actions;
export default testTodofilterSlice.reducer;
