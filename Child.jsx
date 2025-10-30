import React from 'react'

function Child(props) {
  return (
    <div>
    <input type="text"  ref={props.ref}/>


    </div>
  )
}

export default Child;