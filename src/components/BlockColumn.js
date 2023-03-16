import React from "react";
import { Link } from "react-router-dom";

const BlockColumn = ({ column }) => {
    return (
        <div className="blockcontainer" style={{backgroundImage:`url("${column.image}")` }} >
            {(column.heading) && (
                <h1 className="blockheading">{column.heading}</h1>
            )}
            <div className="blockinfo">
                <p>{column.text}</p>
                {(column.link) && (
                    <Link to={column.link} className="blocklink">Read more</Link>
                )}
            </div>
        </div>
    )
}

export default BlockColumn; 