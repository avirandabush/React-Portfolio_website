import React from "react";
import "./card.css";

export default function Card(props)
{
    return(
        <a href={props.url}>
            <div className="card">
                <img src={props.img} alt={props.name} />
                <div className="container">
                    <hr></hr>
                    <h3>{props.name}</h3>
                    <p>{props.desc}</p>
                    <h4>{props.lang}</h4>
                </div>
            </div>
        </a>
    )
}