import React,{useState} from 'react'

function InputBoxData() {
  const [val,setVal]=useState("");
  return (
    <div>
       <h1>Input box Data</h1>
<input type="text" value= {val}onChange={(event)=>setVal(event.target.value)} placeholder='Enter Your Name' />
<h1>{val}</h1>
<button onClick={()=>setVal("")}>Reset form</button>
    </div>
  )
}

export default InputBoxData;