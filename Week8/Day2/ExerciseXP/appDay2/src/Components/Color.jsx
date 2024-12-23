import React,{useState, useEffect} from "react";

function Color() {
    //part I & II
    // const [favoriteColor, setFavoriteColor] = useState("red")
    // return (
    //     <>
    //         <h1>My favorite Color is <i>{favoriteColor}</i></h1>
    //     </>
    // )

// Part 3
//     const [favoriteColor, setFavoriteColor] = useState("red")
//     useEffect(() => {
//         alert("useEffect reached");
//         setFavoriteColor("yellow");
//     }, [])
//             return (
//                 <>
//                     <h1>My favorite Color is <i>{favoriteColor}</i></h1>
//                 </>
    //             )

    // Part 4
    const [favoriteColor, setFavoriteColor] = useState("red");
    const changeColor = () => {
        setFavoriteColor("blue"); 
    };

    return (
        <div>
            <h1>My favorite color is <i>{favoriteColor}</i></h1>
            <button onClick={changeColor}>Change Color</button>
        </div>
    );
    

}

export default Color;