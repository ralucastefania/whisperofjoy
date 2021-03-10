import React from "react";
import { Link } from "react-router-dom";
import "../style/Menu.css";

export default function Menu() {
    return (
      <nav className="menu-navigation">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/stories">Stories</Link>
          </li>
          <li>
            <Link to="/shop">Shop</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li className="search-box">
            <img src="icons/icons8-cart-24.png"></img>
            <input type="search" placeholder="search..."></input>
          </li>
        </ul>
      </nav>
    );
}