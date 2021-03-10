import React from "react";
import "../style/Footer.css";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div>
      <nav className="footer-navigation">
        <ul>
          <li>
            <Link to="/impressum">Impressum</Link>
          </li>
          <li>
            <Link to="/datenschutz">Datenschutz</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
