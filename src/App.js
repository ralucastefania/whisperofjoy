import React from "react";
import { Link, Route, Switch } from "react-router-dom";
import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import Impressum from "./components/Impressum";
import Menu from "./components/Menu";
import Newsletter from "./components/Newsletter";
import SearchButton from "./components/SearchButton";
import Sidebar from "./components/Sidebar";
import SocialMedia from "./components/SocialMedia";
import Stories from "./components/Stories";

function App() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/stories">Stories</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/impressum">Impressum</Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route path="/stories">
          <Stories />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/Impressum">
          <Impressum />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
