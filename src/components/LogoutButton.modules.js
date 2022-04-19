import React from "react";
import "./LogoutButton.modules.css";
import { useNavigate } from "react-router-dom";

function LogoutButton() {
  let navigate = useNavigate();
  const routeChange = () => {
    navigate('/');
  };
  return (
    <div className="logout_button">
      <button onClick={routeChange}>
        <i class="bi bi-box-arrow-in-right"></i>
      </button>
    </div>
  );
}

export default LogoutButton;
