import React, { useRef } from 'react'

function uncontrolledComp() {
const user=useRef();
const pass=useRef();

function formWithuserRef(event){
    const UserName=user.current.value;
    const password=pass.current.value;
event.preventDefault();
console.log("UserName",UserName,"Password",pass);


}



  return (
    <div>
<h1>Uncontrolled used uncontrolled compoents</h1>
<form action="">
<input type="text" ref={user} placeholder='Enter UserNmae' />
<br /><br />
<input type="password" ref={pass} placeholder='Enter Password'/>
<br /><br />
<button>Submit</button>





</form>
    </div>
  )
}

export default uncontrolledComp;