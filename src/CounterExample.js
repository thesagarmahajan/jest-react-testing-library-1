import { useState } from "react"

export default function CounterExample(){
    let [count, setCount] = useState(0)
    return (<>
        <h1>{count}</h1>
        <button onClick={()=>setCount(count+1)}>+</button>
        <button onClick={()=>count!=0?setCount(count-1):setCount(0)}>-</button>
        <button onClick={()=>setCount(0)}>Reset</button>
    </>)
}