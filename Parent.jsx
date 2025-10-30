import React, { useRef } from 'react'
import Child from './Child';

function Parent() {
    const year=useRef();
function Year (){
year.current.focus();
year.current.value="2025";
year.current.style.color="green";
year.current.style.fontSize="20px";
year.current.style.fontWeight="bold";
year.current.style.backgroundColor="yellow";

}

  return (
    <div>
<h1>Fordword Ref in Function</h1>
<Child ref={year} />

<br /><br />
<button onClick={Year}>Enter Year</button>


    </div>
  )
}

export default Parent;