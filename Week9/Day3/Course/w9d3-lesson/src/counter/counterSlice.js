import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    count : 0,
    status : 'ok'
}

const counterSlice = createSlice ({
    name : 'counter',
    initialState ,
    reducers : {
        increment : (state) => {
            // return {...state , count : state.count +1} this is how we did it before
            state.count +=1
        },
        decrement : (state) => {
            state.count -=1
        },
        reset : (state) => {
            state.count = 0
        },
        addNum : (state, action) => {
            state.count += Number(action.payload.num)
        },
        //prepare
        add2Num : {
            reducer (state, action){
                state.count += action.payload
            },
            prepare(num1, num2){
                return {payload : Number( num1) + Number(num2)}
            }
        }
    }
})
export const {increment, decrement, reset, addNum, add2Num} = counterSlice.actions
export default counterSlice.reducer