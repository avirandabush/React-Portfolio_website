import React from "react";
import "./Nav.css";

export default function Nav()
{
    return(
        <nav>
            <a href="#Projects">Projects</a>
            <a href="#Websites">Websites</a>
            <a href="#AboutMe">About me</a>
            <a href="/file/Aviran_Dabush_cv.pdf">Resume</a>
            <a href="http://avirandabush.co.il" id="logo">Aviran Dabush</a>
        </nav>
    )
}