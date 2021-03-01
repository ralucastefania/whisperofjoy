import React from "react";
import Sidebar from "./Sidebar"
import "../style/Home.css";

export default function Home() {
    return (
      <div className="central-page">
        <div className="home">Home</div>
        <Sidebar />
      </div>
    );
}