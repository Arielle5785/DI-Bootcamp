import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import data from "./data_2.json"



const Example2 = () => {
    () => {
        return (
            <>
                {data.Skills.map((item, index) => {
                    return (
                        <ul key={i}>{item.Area}
                            {item.SkillSet.map((lang, idx) => {
                                return (
                                    <li key={idx}> {lang.Name} </li>
                                )
                            })}
                        </ul>
                    )
                })}
            </>
        );
    };
}
export default Example2