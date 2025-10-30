import React from 'react'

function FunctionAsprops({showName,name,passWord}) {

  return (
    <div>

{/* <h1>Pass element in React js</h1> */}
<button onClick={()=>showName(name)}>showName</button>
<button onClick={passWord}>show Password</button>




    </div>
  )
}

export default FunctionAsprops;