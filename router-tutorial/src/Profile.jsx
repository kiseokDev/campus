import React from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
const profileData = {
  velopert: {
    name: "김민준",
    description:
      "Frontend Engineer @ Laftel Inc. 재밌는 것만 골라서 하는 개발자",
  },
  gildong: {
    name: "홍길동",
    description: "전래동화의 주인공",
  },
};
export default function Profile() {
  const { username } = useParams();
  console.log(username);

  const profile = profileData[username];
  return (
    <div>
      <h3>
        {username}({profile.name})
      </h3>
      <p>{profile.description}</p>
      <DeepComponent />
    </div>
  );
}

function DeepComponent() {
  // oh right, same as anywhere else
  const params = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <>
      <h4>Location</h4>
      <textarea value={JSON.stringify(location, null, 2)} readOnly />

      <h4>Params</h4>
      <textarea value={JSON.stringify(params)} readOnly />

      <button onClick={() => navigate("/")}>홈으로</button>
    </>
  );
}
