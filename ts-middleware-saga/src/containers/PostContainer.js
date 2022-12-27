import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Post from "../components/Post";
import { getPost, goToHome } from "../modules/posts";

export default function PostContainer({ postId }) {
  const navigate = useNavigate();
  const { data, loading, error } = useSelector(
    state => state.posts.post[postId]
  ) || { loading: false, data: null, error: null };
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPost(postId));
  }, [postId, dispatch]);

  if (loading && !data) return <div>로딩중...</div>;
  if (error) return <div>에러 발생!</div>;
  if (!data) return null;

  return (
    <>
      <Post post={data} />
      <button onClick={() => dispatch(goToHome(navigate))}>홈으로가기</button>
    </>
  );
}
