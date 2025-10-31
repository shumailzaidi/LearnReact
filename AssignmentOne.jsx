import { useState } from "react";

 function AssignmentOne(){
const [num,setNum]=useState(1);

    return(
<>
<h1>Hit Counter </h1>

<h1>counter : {num}</h1>

 <h2><button onClick={()=>setNum(num+1)}> Plus    </button>  </h2>
</>
    )
}
export default AssignmentOne;