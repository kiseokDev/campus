import { combineReducers, configureStore } from "@reduxjs/toolkit";
import todosReducer from "../features/todo/testTodoSlice";
import testTodoFilter from "../features/todo/testTodoFilterSlice";

const rootReducer = combineReducers({
  todos: todosReducer,
  visibilityFilter: testTodoFilter,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
