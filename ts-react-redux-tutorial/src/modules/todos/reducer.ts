import { TodosAction, TodosState } from "./types";
import { ADD_TODO, TOGGLE_TODO, REMOVE_TODO } from "./actions";
import { createReducer } from "typesafe-actions";
// 초기 상태 선언
const initialState: TodosState = [];

// 리듀서 작성
const reducer = createReducer<TodosState, TodosAction>(initialState, {
  [ADD_TODO]: (state, action) => {
    console.log(typeof action);
    return [...state, { ...action.payload }];
    // state.concat({
    //   ...action.payload, // id, text 를 이 안에 넣기
    //   done: false,
  },
  // 바구조화 할당을 활용하여 payload 값의 이름을 바꿀 수 있음
  [TOGGLE_TODO]: (state, { payload: id }) =>
    state.map(todo => (todo.id === id ? { ...todo, done: !todo.done } : todo)),
  [REMOVE_TODO]: (state, { payload: id }) =>
    state.filter(todo => todo.id !== id),
});

export default reducer;
