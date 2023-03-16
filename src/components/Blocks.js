import React, { useState, useEffect } from "react";
import api from "../services/api";
import BlockColumn from "./BlockColumn";

const Blocks = () => {
    const [blocks, setBlocks] = useState([]);

    useEffect(() => {
        api.getInfoPromise()
            .then((info) => {
                setBlocks(info.blocks)
            })

    }, [])

    return (
        <div className="blockwrapper">
            {blocks.map((data, index) => {
                return (
                    <>
                        {(data.type === "columns") && (
                            <div className={data.columns.length > 1 ? "blockbox" : "blockpadding"}>
                                {data.columns.map((column, index) => {
                                    return (
                                        <BlockColumn column={column} key={index} />
                                    )
                                })}
                            </div>
                        )}
                    </>
                )
            })}
        </div>
    )
}

export default Blocks; 