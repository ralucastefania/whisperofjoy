import React from "react";
import "../style/ArticleHome.css";

export default function ArticleHome(props) {
    return (
      <div className="article-home">
        {props.left && <img className="article-image" src="benoclu.jpg"></img>}
        <article>
          <h2>First letter</h2>
          <p>
            I am writing you as our encounter this morning has been a bit
            unpleasant for me. First of all let me apologise for taking you by
            surprise with my enthusiasm. I really did not think it would scare
            you that much and make you hit me like that. I mean, my cheek still
            feels a bit funny from your claws. Second of all, let me assure you
            of my friendship and good intentions. You are more than welcomed to
            cross my humans’ terrace anytime you wanna take your rounds around
            the neighbourhood. An answer from you would make my tail wiggle of
            extreme happiness. Big hugs, S.
          </p>
          <div className="social-buttons">
            {/* className social-buttons found in SocialMedia.css */}
            <img src="icons/icons8-facebook-26.png"></img>
            <img src="icons/icons8-instagram-26.png"></img>
            <img src="icons/icons8-pinterest-26.png"></img>
          </div>
        </article>
        {props.right && <img className="article-image" src="benoclu.jpg"></img>}
      </div>
    );
}