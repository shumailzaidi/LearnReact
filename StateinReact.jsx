import { useState } from "react";

function StateinReact(){
const [city,setCity]=useState("Not Active Programs");

function changeCity(){

setCity("Active Programs");
}
return(
<>
<h1>India Great </h1>
<h1>{city}</h1>
<h2><button onClick={changeCity}> Start</button></h2>
</>
)

}
export default StateinReact;