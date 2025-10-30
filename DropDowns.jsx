import React, { useState } from 'react'
import Clock  from './Clock';
function DropDowns() {

    const [tcolor,setTcolor]=useState('black');
    const [bcolor,setBcolor]=useState('yellow');
  return (
    <div style={{
        
    }}>
        <h1 style={{color:"green"}}>Digital Clock</h1>
        <label htmlFor="Time">Select  Time color:</label> 
<select  id="Time" onClick={(event)=>setTcolor(event.target.value)}>

<option value="red">red</option>
<option value="blue">blue</option>
<option value="yellow">yellow</option>
<option value="orange">orange</option>
<option value="black">black</option>
<option value="gray">gray</option>

</select><br /><br />
 <label htmlFor="bTime">Select block color:</label> 
<select  id="bTime" onClick={(event)=>setBcolor(event.target.value)}>

<option value="red">red</option>
<option value="blue">blue</option>
<option value="yellow">yellow</option>
<option value="orange">orange</option>
<option value="lightblue">lightblue</option>
<option value="lightgreen">lightgreen</option>

</select>

        <Clock tcolor={tcolor} bcolor={bcolor}/>
    </div>
  )
}

export default DropDowns;


