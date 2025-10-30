import React from 'react'

function EmpCard(data) {
  return (
    <div style={{
        border:"2px solid green",
width:'450px',
margin:'10px',
padding:'10px',
borderRadius:'10px',
backgroundColor:'lightgray',
    }}>
<h1 style={{color:'red',textAlign:'center'}}>Employee card</h1>
<h2>Employee id :<span style={{color:'green'}}>{data.id}</span></h2>
<h2>Employee Name :<span style={{color:'green'}}>{data.name}</span></h2>
<h2>Employee Age :<span style={{color:'green'}}>{data.age}</span></h2>
<h2>Employee Salary :<span style={{color:'green'}}>{data.salary}</span></h2>
<h2>Employee Email :<span style={{color:'green'}}>{data.email}</span></h2>
    </div>
  )
}
export default EmpCard;