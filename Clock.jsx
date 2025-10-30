import React, { useEffect, useState } from 'react'

function Clock({tcolor,bcolor}) {
const [time,setTime]=useState(new Date());
  useEffect(()=>{
const IntervalID=setInterval(() => {
  setTime((new Date));
},1000);
  return ()=> clearInterval(IntervalID);
  },[]);
  return (
    <div>
        <h2 style={{
          color:tcolor,
backgroundColor:bcolor,
width:'250PX',
padding:'10px',
borderRadius:'5px',

        }}>{time.toLocaleTimeString()}</h2>
    </div>
  )
}

export default Clock;