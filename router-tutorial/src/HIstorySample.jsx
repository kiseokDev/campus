import React from "react";
import { useNavigate } from "react-router-dom";

export default function HIstorySample() {
  const navigate = useNavigate();
  const handleGoback = () => navigate(-1);
  const handleGoHome = () => navigate("/");
  return (
    <div>
      <button onClick={handleGoback}>뒤로가기</button>
      <button onClick={handleGoHome}>홈으로</button>
    </div>
  );
}
