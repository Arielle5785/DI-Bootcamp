import { useDispatch, useSelector } from "react-redux"
import { increment, decrement, reset, addNum, add2Num } from "./counterSlice"
import { useRef } from "react"

const Counter = () => {
    const count = useSelector(state => state.counterReducer.count)
    const dispatch = useDispatch()
    const inputRef = useRef()
    const numRef1 = useRef()
    const numRef2 = useRef()
    return (
        <>
            <h2>{count}</h2>
            <button onClick={()=> dispatch(increment())}>+</button>
            <button onClick={()=> dispatch(decrement())}>-</button>
            <button onClick={()=> dispatch(reset())}>Reset</button>

            <div>
                <h3>Increment by number</h3>
                <input type="text" ref={inputRef}/>
                <button onClick={()=>dispatch(addNum({num :inputRef.current.value}))}>Add</button>
            </div>

            <div>
                <h3>Increment by 2 numbers</h3>
                <input type="text" ref={numRef1}/>
                <input type="text" ref={numRef2}/>
                <button onClick={()=>dispatch(add2Num(numRef1.current.value, numRef2.current.value))}>Add</button>
            </div>
        </>
    )
}

export default Counter