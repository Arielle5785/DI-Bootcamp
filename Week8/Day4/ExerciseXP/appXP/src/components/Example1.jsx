import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import data from "./data_2.json"



// const Example1 = () => {
//     const [socialMedias, setSocialMedias] = useState([]);
//     const params = useParams();

//     useEffect(() => {
//     setSocialMedias(data.SocialMedias);
//     }, []);
    
//     return (
//         <div>
            
//             {data.SocialMedias.map((item) => {
//                 return (
//                     <ul>
//                         {socialMedias.map((link, index) => (
//                         <li key={index}>
//                         <a href={link} target="_blank" >
//                         {link}
//                         </a>
//                         </li>
//                         ))}
//                     </ul>
//                 )
//             } 
//         )}
//         </div>
//   );
// }
const Example1 = () => {
    return (
        <>
        <ul>
            {data.SocialMedias.map((url, index) => {
                return (
                    <li key={index}> {url} </li>
                )
            })}
        </ul>

        </>
    )
}

export default Example1;