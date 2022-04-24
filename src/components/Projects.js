import React from "react";
import Card from "./Card";
import data from "../projects.json";

export default function Projects()
{
    const cards = data.map(item => 
        {
            return(
                <Card
                    key={item.id}
                    name={item.name}
                    lang={item.language}
                    desc={item.description}
                    img={item.img}
                    url={item.url}
                />
            )
        })

    return(
        <>
            <h2>Projects</h2>
            <div className="cards-container">
                {cards}
            </div>
        </>
    )
}