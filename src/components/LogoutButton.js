import { React, useContext } from "react";
import "./LogoutButton.css";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../App";

export default function LogoutButton() {
  let navigate = useNavigate();
  const setActiveContact = useContext(UserContext);


  const logout = () => {
    setActiveContact('');
    navigate('/');
  }

  return (
    <div className="logout_button">
      <button onClick={logout}>
        <i className="bi bi-box-arrow-in-right"></i>
      </button>
    </div>
  );
}