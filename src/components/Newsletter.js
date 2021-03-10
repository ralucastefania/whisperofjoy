import React from "react";
import "../style/Newsletter.css";
// import { MessengerPiggeon } from "../App";


export default function Newsletter() {
//   const { dispatch, popups } = React.useContext(MessengerPiggeon);

  return (
    <div className="subscribe-sidebar">
      <form>
        <label>Subscribe to the newsletter</label>
        <input
          type="email" id="email-subscription-sidebar"
        //   defaultValue={popups.subscribedEmail}
        ></input>
        <button>
          Submit
        </button>
      </form>
    </div>
  );
}

/*
<div>
      <form>
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
      </form>
    </div>

    */