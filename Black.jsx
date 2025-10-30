import React,{useState} from 'react'
import DisplayData from './DisplayData';

function Black() {
    const [black,setBlack]=useState(1);
    const [red,setRed]=useState(5);
  return (
    <div>
<h1>Handle props  side Effect</h1>

<DisplayData black={black} red={red}/>
<button onClick={()=>setBlack(black+1)}>Increase Black</button>
<button onClick={()=>setRed(red+5)}>Increase red</button>
    </div>
  )
}

export default Black;