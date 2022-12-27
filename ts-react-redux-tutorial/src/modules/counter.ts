import { deprecated, ActionType, createReducer } from "typesafe-actions";
const { createStandardAction } = deprecated;

const INCREASE = "counter/INCREASE" as const;
const DECREASE = "counter/DECREASE" as const;
const INCREASE_BY = "counter/INCREASE_BY" as const;

export const increase = createStandardAction(INCREASE)();
export const decrease = createStandardAction(DECREASE)();
export const increaseBy = createStandardAction(INCREASE_BY)<number>(); // payload 타입을 Generics 로 설정해주세요.

// export const increase = () => ({ type: INCREASE });
// export const decrease = () => ({ type: DECREASE });
// export const increaseBy = (diff: number) => ({
//   type: INCREASE_BY,
//   payload: diff,
// });

// 모든 액션 겍체들에 대한 타입을 준비해줍니다.
// ReturnType<typeof _____> 는 특정 함수의 반환값을 추론해줍니다
// 상단부에서 액션타입을 선언 할 떄 as const 를 하지 않으면 이 부분이 제대로 작동하지 않습니다.
const actions = { increase, decrease, increaseBy }; // 모든 액션 생성함수들을 actions 객체에 넣습니다
type CounterAction = ActionType<typeof actions>;

// type CounterAction =
//   | ReturnType<typeof increase>
//   | ReturnType<typeof decrease>
//   | ReturnType<typeof increaseBy>;

type CounterState = {
  count: number;
};

const initialState: CounterState = {
  count: 0,
};

// createReducer 메서드 체이닝 방식으로 구현
// Generics로 리듀서에서 관리할 상태, 그리고 리듀서에서 처리 할 모든 액션 객체들의 타입을 넣어야합니다
const counter = createReducer<CounterState, CounterAction>(initialState)
  .handleAction(increase, state => ({ count: state.count + 1 }))
  .handleAction(decrease, state => ({ count: state.count - 1 }))
  .handleAction(increaseBy, (state, action) => ({
    count: state.count + action.payload,
  }));

// createReducer 는 리듀서를 쉽게 만들 수 있게 해주는 함수입니다.
// const counter = createReducer<CounterState, CounterAction>(initialState, {
//   [INCREASE]: state => ({
//     count: state.count + 1,
//   }),
//   [DECREASE]: state => ({
//     count: state.count - 1,
//   }),
//   [INCREASE_BY]: (state, action) => ({ count: state.count + action.payload }),
// });

// function counter(
//   state: CounterState = initialState,
//   action: CounterAction
// ): CounterState {
//   switch (action.type) {
//     case INCREASE:
//       return {
//         count: state.count + 1,
//       };
//     case DECREASE:
//       return {
//         count: state.count - 1,
//       };
//     case INCREASE_BY:
//       return {
//         count: state.count + action.payload,
//       };
//     default:
//       return state;
//   }
// }

export default counter;
