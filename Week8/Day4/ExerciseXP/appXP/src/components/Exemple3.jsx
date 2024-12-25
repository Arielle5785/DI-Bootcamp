import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import data from "./data_2.json"


const Example3 = () => {
    const [experiences, setExperiences] = useState([]);

  useEffect(() => {
    setExperiences(data.Experiences); 
  }, []);

  return (
      <>
        {data.Experiences.map((item, i) => {
            return(
                <div key={i}>
                    <img src={item.logo} alt="img" />
                    <a href={item.url}> {item.companyName} </a>
                    {item.roles.map((role, j) => {
                        return(
                            <div key={j}>
                                <p>{role.title} </p>
                                <p>{role.startDate} {role.location} </p>
                                <p>{role.description} </p>
                            </div>
                        )
                    })}
                </div>
            )
        })}
      </>
  );
};


export default Example3;