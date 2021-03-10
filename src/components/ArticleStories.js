import React from "react";
import "../style/ArticleStories.css";
import { WhisperContext } from "../App"

export default function ArticleStories(props) {
  const { dispatch, state } = React.useContext(WhisperContext);
  return (
    <div className="article-home">
      {props.side === "left" && <img className="article-image" src="benoclu.jpg"></img>}
      <article>
        <h2>{ state.blogs[props.code].title }</h2>
        <p>{ state.blogs[props.code].text }</p>
        <div className="social-buttons">
          {/* className social-buttons found in SocialMedia.css */}
          <img src="icons/icons8-facebook-26.png"></img>
          <img src="icons/icons8-instagram-26.png"></img>
          <img src="icons/icons8-pinterest-26.png"></img>
        </div>
      </article>
      {props.side === "right" && <img className="article-image" src="benoclu.jpg"></img>}
    </div>
  );
}
