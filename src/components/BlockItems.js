import React from "react";
import { Link } from "react-router-dom";

const BlockItems = (heading, text, image, link) => {
    return (
        <div>
            <h1>{heading}</h1>
            <img href={image}></img>
            <p>{text}</p>
            <Link to={link}>Click me</Link>
        </div>
    )
}

export default BlockItems; 