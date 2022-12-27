import { deprecated, createAction } from "typesafe-actions";
import { Todo } from "./index";
const { createStandardAction } = deprecated;

// 액션 타입 선언
export const ADD_TODO = "todos/ADD_TODO";
export const TOGGLE_TODO = "todos/TOGGLE_TODO";
export const REMOVE_TODO = "todos/REMOVE_TODO";

let nextId = 1; // 새로운 항목을 추가 할 때 사용 할 고유 ID 값

// 액션 생성 함수

// 이 액션 생성 함수의 경우엔 파라미터를 기반하여 커스터마이징된 payload를 설정해주므로,
// createAction 이라는 함수를 사용합니다.
// 여기서 action은 액션 객체를 만드는 함수입니다
export const addTodo = createAction(ADD_TODO, (text: string) => ({
  id: nextId++,
  text,
  done: false,
}))<Todo>();
// export const addTodo = createAction(
//   ADD_TODO,
//   action => (text: string) =>
//     action({
//       id: nextId++,
//       text,
//     })
// );
// 위 코드는 다음과 같은 형태로도 구현 할 수 있지만, createAction 말고 action 만 사용하면
// Action Helpers (https://www.npmjs.com/package/typesafe-actions#action-helpers-api) 지원이 안됩니다.
// export const addTodo = (text: string) => action(ADD_TODO, { id: nextId++, text })

// payload가 그대로 들어가는 액션생성함수는 정말 간단합니다.
export const toggleTodo = createStandardAction(TOGGLE_TODO)<number>();
export const removeTodo = createStandardAction(REMOVE_TODO)<number>();

// export const toggleTodo = (id: number) => ({
//   type: TOGGLE_TODO,
//   payload: id
// });

// export const removeTodo = (id: number) => ({
//   type: REMOVE_TODO,
//   payload: id
// });
