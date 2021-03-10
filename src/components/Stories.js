import React from "react";
import "../style/Stories.css";
import Sidebar from "./Sidebar";
import ArticleStories from "./ArticleStories";
import { WhisperContext } from "../App";

export default function Stories() {
  const { dispatch, state } = React.useContext(WhisperContext);

    return (
      <div className="central-page-stories">
        <div className="stories">
          {
            state.blogs.map((blog) => {
              let word="left"
              if(blog.id % 2 === 0) word="right"
              return(<ArticleStories code={blog.id} side={word}/>)
            })
          }
        </div>
        <Sidebar />
      </div>
    );
}