import React, { useContext } from "react";
import "../style/Cookies.css";
import { MessengerPiggeon } from "../App"

export default function Cookies() {
    const { dispatch, popups } = useContext(MessengerPiggeon);

    return (
      <div className="cookie-popup">
        We are using cookies. You have to agree nevertheless :))
        <button onClick={ (e) => {
                    dispatch({ type: "cookiePopupVisibleOFF" });
                }
            }>OK</button>
      </div>
    );
}