import React, { useEffect, useState } from 'react'

function LifeCycle() {
    const [counter,setCounter]=useState(1);

    function whenMount(){

console.log('Compoent  suessefully Mount');
    }

    function whenUpdate(){

console.log('Compoent  update');

    }
    
    function whenEnd(){
console.log('Compoent Unmount')

    }

useEffect(()=>{whenMount();},[]);
useEffect(()=>{whenUpdate();},[counter]);
    
useEffect(()=>{

return()=> whenEnd();

},[]);

  return (
    <div>
        <h1 style={{color:'green'}}>Compoent life Cycle</h1>
<h1>Value : {counter}</h1>
<button onClick={()=>setCounter(counter+1)}>Increase value</button>
    </div>
  )
}

export default LifeCycle;