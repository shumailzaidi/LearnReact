import React from 'react'

function ObjectData({user}) {
  return (
    <>
    
    {/* <h1>Object and props</h1> */}
    <h2>Name : { user.name}</h2>
    <h2>Salary : {user.salary}</h2>
    <h2>Age : {user.age}</h2>
    <h2> Email : {user.email}</h2>
    <hr />
    </>
  )
}

export default ObjectData;