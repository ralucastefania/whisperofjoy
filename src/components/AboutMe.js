import React from "react";
import "../style/AboutMe.css";

export default function AboutMe() {
  return (
    <div className="aboutme">
      <h3 className="about-title">About me</h3>
      <img src="raluca.jpg" className="about-photo" />
      <p>
        Hi there! I’m so happy you stumbled upon my site and took your time to
        read (at least) one of my stories :) I’m just a girl in search of
        herself and her happyness. I am born in Romania, but since 2015 I live
        in Germany and still don’t know if this is my forever home. I dream to
        travel the world and make as many great memories as possible, but not
        because we leave only once or because life is short. It's simply the way
        I saw myself live the life I was given ever since I was a child.
      </p>
    </div>
  );
}
