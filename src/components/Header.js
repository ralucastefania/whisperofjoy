import React from "react";
import "../style/Header.css";
import { Link } from "react-router-dom";


export default function Header() {
  return (
    <Link to="/">
      <img src="bigLogo.png" className="header-image" />
    </Link>
  );
}
