import { useState } from "react";
import MyImage from "./MyImage";

function TaggleButton() {
    const[display,setDisplay]=useState(true)

return ( 
    <> 
    <button><h1> Taggle button (NO/OFF) </h1></button> <br /><br />
    <button onClick={()=>setDisplay(!display)}> ON  |  OFF</button>
    
{

//display?<h1>shumail zaidi</h1>:null

display? <MyImage></MyImage> :null

}
    </>
)

}
export default TaggleButton;