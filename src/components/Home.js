import React from "react";
import Sidebar from "./Sidebar"
import "../style/Home.css";
import ArticleHome from "./ArticleHome";

export default function Home() {
    return (
      <div className="central-page-home">
        <div className="home">
          <ArticleHome left />
          <ArticleHome right />
        </div>
        <Sidebar />
      </div>
    );
}