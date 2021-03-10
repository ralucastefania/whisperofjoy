import React from "react";
import { Link } from "react-router-dom";
import "../style/CookiesPopup.css";
import { WhisperContext } from "../App";

export default function CookiesPopup() {
  const { dispatch, state } = React.useContext(WhisperContext);

  return (
    <div className="cookies-popup">
      <label>We use cookies 🍪 </label>
      <label>
        For more details click <Link to="/datenschutz"> here </Link>😉{" "}
      </label>
      <button
        onClick={() => {
          dispatch({ message: "closeCookiesPopup" });
        }}
      >
        OK 🙂
      </button>
    </div>
  );
}
