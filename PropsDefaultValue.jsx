import React from 'react'

function PropsDefaultValue({userName="Guest user"}) {
  return (
    <div>
        <h1> Assign Default value to Props </h1>
        <h1>Hello : {userName} </h1>
    </div>
  )
}

export default PropsDefaultValue;