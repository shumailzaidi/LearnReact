import React, { useState } from 'react'

function ControlledCompoent() {
const[name,setName]=useState("");
const[password,setPassword]=useState("");
const[phno,setPhno]=useState("");

  return (
    <div>
        <h1>controlled compoents </h1>
<form action="">

<input type="text" value={name} onChange={(event)=>setName(event.target.value)} placeholder='Enter Your Name' />
<br /><br />


 <input type="Password"  value={password} onChange={(event)=>password(event.target.value)}  placeholder='Enter Your Password' />
<br /><br />

<input type="tel" value={phno} onChange={(event)=>setPhno(event.target.value)}  placeholder='Enter Your Phone No' />
<br /><br />

<button>submit</button> 

<button onclick={()=>{setName("");setPassword("");setPhno("");}}> Clear Data</button>



<h2>{name}</h2>
<h2>{password}</h2>
<h2>{phno}</h2>


</form>

    </div>
  )
}

export default ControlledCompoent;