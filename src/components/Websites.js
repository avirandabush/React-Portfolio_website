import React from "react";
import Card from "./Card";
import data from "../websites.json";

export default function Websites()
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
            <h2>Websites</h2>
            <div className="cards-container">
                {cards}
            </div>
        </>
    )
}