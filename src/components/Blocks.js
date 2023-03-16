import React, { useState, useEffect } from "react";
import api from "../services/api";
import BlockItems from "./BlockItems";

const Blocks = () => {
    const [blocks, setBlocks] = useState([]);

    useEffect(() => {
        api.getInfoPromise()
            .then((info) => {
                setBlocks(info.blocks)
            })

    }, [])


    // const columns = blocks[0].columns[0].heading; 

    return (
        <div>
            <div>Vi funkar</div>
            <div>
                {blocks.map((data, index) => {
                    if (data.type === "columns") {
                        data.columns.map((heading, text, link, image) => {
                            return(
                                <BlockItems heading={heading} text={text} link={link} image={image} key={index}/>
                            )
                        })
                    }
                })}
            </div>
        </div>
    )
}

export default Blocks; 