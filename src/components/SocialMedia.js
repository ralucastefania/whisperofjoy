import React from "react";
import "../style/SocialMedia.css"

export default function SocialMedia() {
    return (
      <div className="social-media">
        <label>Follow me</label>
        <div className="social-buttons">
          <img src="icons/icons8-facebook-26.png"></img>
          <img src="icons/icons8-instagram-26.png"></img>
          <img src="icons/icons8-youtube-26.png"></img>
          <img src="icons/icons8-pinterest-26.png"></img>
        </div>
      </div>
    );
}