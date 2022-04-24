import React from "react";
import "./Main.css";
import Websites from "./Websites";
import Projects from "./Projects";
import AboutMe from "./AboutMe";

export default function Main()
{
    return(
        <main>
            <Websites />
            <Projects />
            <AboutMe />
        </main>
    )
}