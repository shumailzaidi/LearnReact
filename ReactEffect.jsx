import React, { useEffect, useState } from 'react'

function ReactEffect() {

    const [count,setCount]=useState(1);
    const [ data,setData]=useState(5);
    function oneCall() {
        console.log("Counter:",count ,"/t", "Data:", data);
    }
useEffect(()=>{
 oneCall();
},[count,data]);
    
    return (
        <div>
            <h1>useEffect in React js</h1>
            <h1>counter:{count}</h1>
            <h1>data:{data}</h1>
            <button onClick={()=>setCount(count+1)}>counter</button>
            <button onClick={()=>setData(data+5)}>data</button>
        </div>
    )
}

export default ReactEffect;