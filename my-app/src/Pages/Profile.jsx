import React from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function Profile() {
  let navigate = useNavigate();
  let { username } = useParams();

  return (
    <div>
      THIS IS FOR {username}
      <button
        onClick={() => {
          navigate("/about");
        }}
      >
        Go to about
      </button>
    </div>
  );
}
