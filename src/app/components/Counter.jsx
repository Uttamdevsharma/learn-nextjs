'use client'

import { useState } from "react"

const Counter=() => {
    const[counter , setCounter] = useState(10);

    const increaseHandler = () => {
        setCounter(counter + 1);
    }

    return(
        <>

        <p>value is {counter} </p>
        <button onClick={increaseHandler}>Increase by 1</button>
         
        </>
    )
}
export default Counter;