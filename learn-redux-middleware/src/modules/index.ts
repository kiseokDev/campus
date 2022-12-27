import { combineReducers } from "redux";
import { all } from "redux-saga/effects";
import counter, { counterSaga } from "./counter";
// import posts, { postsSaga } from "./posts_refactored";
import posts, { postsSaga } from "./posts";
import github from "./github";

const rootReducer = combineReducers({ counter, posts, github });

export function* rootSaga() {
  yield all([counterSaga(), postsSaga()]); // all 은 배열 안의 여러 사가를 동시에 실행시켜줍니다.
}

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
