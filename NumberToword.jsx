import { useState } from "react";

function NumberToword(){

    const [number,setNumber]=useState(0);

return (
<>
<h1>Number To words </h1>
<h1>{number}</h1>
<button onClickCapture={()=>setNumber(Number+1)}>Plus</button>
<button onClickCapture={()=>setNumber(Number-1)}>Minus</button>
<button onClickCapture={()=>setNumber(0)}>Reset</button>




</>

)

}
export default NumberToword;