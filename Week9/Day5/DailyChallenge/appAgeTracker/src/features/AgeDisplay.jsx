import React from "react";
import { useSelector, useDispatch } from "react-redux";
// import { initialState } from "./AgeSlice";
import { ageUpAsync, ageDownAsync } from "./AgeSlice";


const AgeDisplay = () => {
    //   const { age, loading } = useSelector((state) => state.ageReducer.age);
    const { age, loading } = useSelector((state) => state.ageReducer);
    const dispatch = useDispatch();
    return (
    <>
    <div>
      <h2>Current Age: {age}</h2>
        {loading && <p>Loading...</p>}
    </div>
    <div>
      <button onClick={() => dispatch(ageUpAsync())}>Age Up</button>
      <button onClick={() => dispatch(ageDownAsync())}>Age Down</button>
    </div>
    </>
  );
};

export default AgeDisplay;