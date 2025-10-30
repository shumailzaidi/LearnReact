import React from 'react'

function App() {
  return (
    <>

<h1 style={{ color: 'chocolate' }}>Learn With Shumail zaidi</h1>
<Guests guest={5}/>
    </>
  )
}
const Guests=({guest})=>{
guest=guest+1;

return(

<h1>We have {guest} guests we need {guest}  cup of tea .</h1>

)

}
export default App