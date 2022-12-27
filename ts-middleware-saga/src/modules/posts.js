import * as postsAPI from "../api/posts"; // api/posts 안의 함수 모두 불러오기
import {
  createPromiseThunk,
  reducerUtils,
  handleAsyncActions,
  createPromiseThunkById,
  handleAsyncActionsById,
  createPromiseSaga,
  createPromiseSagaById,
} from "../lib/asyncUtils";
import { call, getContext, put, take, takeEvery } from "redux-saga/effects";
import { useNavigate } from "react-router-dom";
import { act } from "react-dom/test-utils";

/* 액션 타입 */
// 포스트 여러개 조회하기
const GET_POSTS = "GET_POSTS"; // 요청 시작
const GET_POSTS_SUCCESS = "GET_POSTS_SUCCESS"; // 요청 성공
const GET_POSTS_ERROR = "GET_POSTS_ERROR"; // 요청 실패

// 포스트 하나 조회하기
const GET_POST = "GET_POST";
const GET_POST_SUCCESS = "GET_POST_SUCCESS";
const GET_POST_ERROR = "GET_POST_ERROR";
const GO_TO_HOME = "GO_TO_HOME";

// 아주 쉽게 thunk 함수를 만들 수 있게 되었습니다.
// export const getPosts = createPromiseThunk(GET_POSTS, postsAPI.getPosts);
// export const getPost = createPromiseThunkById(GET_POST, postsAPI.getPostById);
// export const clearPost = () => ({ type: CLEAR_POST });

export const getPosts = () => ({ type: GET_POSTS });
// payload는 파라미터 용도, meta는 리듀서에서 id를 알기위한 용도
export const getPost = id => ({ type: GET_POST, payload: id, meta: id });
export const goToHome = navigate => ({ type: GO_TO_HOME, navigate });

//사가를 만들어주는 함수 : createPromiseSaga
//사가들은 전체 사가를 합치는 postSaga 에서 type이름과 함께 매핑 시켜준다.
//프로미스 사가는 비동기 요청을 하고 결과를 state에 반환하기 위해 디스패치한다.

//매핑된 type이름을 디스패치 하면 미들웨어에서 비동기를 실행하고 디스패치해서 결과흘 반환하는것.
const getPostsSaga = createPromiseSaga(GET_POSTS, postsAPI.getPosts);
const getPostSaga = createPromiseSagaById(GET_POST, postsAPI.getPostById);
const goToHomeNotSaga = function (action, state) {
  action.navigate("/");
  return state;
};
// function* getPostsSaga() {
//   try {
//     const posts = yield call(postsAPI.getPosts);
//     // call 을 사용하면 특정 함수를 호출하고, 결과물이 반환 될 때까지 기다려줄 수 있습니다.
//     yield put({
//       type: GET_POSTS_SUCCESS,
//       payload: posts,
//     });
//   } catch (error) {
//     // put은 특정 액션을 디스패치 해줍니다.
//     yield put({
//       type: GET_POSTS_ERROR,
//       error: true,
//       payload: error,
//     });
//   }
// }

// // 액션이 지니고 있는 값을 조회하고 싶다면 action을 파라미터로 받아와서 사용 할 수 있습니다.
// function* getPostSaga(action) {
//   const param = action.payload;
//   const id = action.meta;
//   try {
//     const post = yield call(postsAPI.getPostById, param);
//     yield put({
//       type: GET_POST_SUCCESS,
//       payload: post,
//       meta: id,
//     });
//   } catch (err) {
//     yield put({
//       type: GET_POST_ERROR,
//       error: true,
//       payload: err,
//       meta: id,
//     });
//   }
// }

export function* postsSaga() {
  yield takeEvery(GET_POSTS, getPostsSaga);
  yield takeEvery(GET_POST, getPostSaga);
}

// initialState 쪽도 반복되는 코드를 initial() 함수를 사용해서 리팩토링 했습니다.
const initialState = {
  posts: reducerUtils.initial(),
  post: reducerUtils.initial(),
};

export default function posts(state = initialState, action) {
  switch (action.type) {
    case GET_POSTS:
    case GET_POSTS_SUCCESS:
    case GET_POSTS_ERROR:
      return handleAsyncActions(GET_POSTS, "posts", true)(state, action);
    case GET_POST:
    case GET_POST_SUCCESS:
    case GET_POST_ERROR:
      return handleAsyncActionsById(GET_POST, "post", true)(state, action);
    case GO_TO_HOME:
      return goToHomeNotSaga(action, state);
    default:
      return state;
  }
}
