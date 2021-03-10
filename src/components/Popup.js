import React, { useContext } from "react";
import "../style/Popup.css";
// import { MessengerPiggeon } from "../App";

export default function Popup() {
  // const { dispatch, popups } = useContext(MessengerPiggeon);

  return (
    <div className="subscribe-popup">
      {/* <form>
        <button
          className="close-button"
          onClick={() => {
            dispatch({ type: "subscribePopupVisibleOFF" });
          }}
        >
          X
        </button>
        <br></br>
        <label>Subscribe to the newsletter</label>
        <input
          onChange={(e) => {
            dispatch({
              type: "updateEmail",
              newEmail: e.target.value,
            });
          }}
          type="email"
          id="subscribeEmail"
          defaultValue={popups.subscribedEmail}
        ></input>
        <button
          onClick={() => {
            dispatch({ type: "subscribePopupVisibleOFF" });
          }}
        >
          Submit
        </button>
      </form> */}
    </div>
  );
}
