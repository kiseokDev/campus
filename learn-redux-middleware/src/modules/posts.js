import * as postsAPI from "../api/posts";
import {
  reducerUtils,
  handleAsyncActions,
  handleAsyncActionsById,
} from "../lib/asyncUtils";
import { call, put, takeEvery } from "redux-saga/effects";

const GET_POSTS = "GET_POSTS";
const GET_POSTS_SUCCESS = "GET_POSTS_SUCCESS";
const GET_POSTS_ERROR = "GET_POSTS_ERROR";

const GET_POST = "GET_POST";
const GET_POST_SUCCESS = "GET_POST_SUCCESS";
const GET_POST_ERROR = "GET_POST_ERROR";

export const getPosts = () => ({ type: GET_POST });
export const getPost = id => ({ type: GET_POST, payload: id, meta: id });

function* getPostsSaga() {
  try {
    const posts = yield call(postsAPI.getPosts);
    yield put({
      type: GET_POSTS_SUCCESS,
      payload: posts,
    });
  } catch (e) {
    yield put({
      type: GET_POST_ERROR,
      error: true,
      payload: e,
    });
  }
}
//감지 대상이 발견되면 비동기 함수 실행을 위해선 action.payload가 필수
function* getPostSaga(action) {
  const param = action.payload;
  const id = action.meta;
  try {
    const post = yield call(postsAPI.getPostById, param);
    //dispatch랑 같은 put
    yield put({
      type: GET_POST_SUCCESS,
      payload: post,
      meta: id,
    });
  } catch (e) {
    yield put({
      type: GET_POST_ERROR,
      error: true,
      payload: e,
      meta: id,
    });
  }
}

export function* postsSaga() {
  yield takeEvery(GET_POSTS, getPostsSaga);
  yield takeEvery(GET_POST, getPostSaga);
}

export const goToHomeNotSaga = function (action, state) {
  action.navigate("/");
  return state;
};

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
    default:
      return state;
  }
}

export const getPost_thunk = id => {
  return async function (dispatch) {
    dispatch({ type: GET_POST }); // 요청이 시작됨
    try {
      const post = await postsAPI.getPostById(id); // API 호출
      dispatch({ type: GET_POST_SUCCESS, post }); // 성공
    } catch (e) {
      dispatch({ type: GET_POST_ERROR, error: e }); // 실패
    }
  };
};
