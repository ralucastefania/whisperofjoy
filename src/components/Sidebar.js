import React from "react";
import "../style/Sidebar.css";
import AboutMe from "./AboutMe";
import Newsletter from "./Newsletter";
import SocialMedia from "./SocialMedia";


export default function Sidebar() {
    return(
        <div className="sidebar">
            <AboutMe/>
            <SocialMedia/>
            <Newsletter/>
        </div>
    )
}