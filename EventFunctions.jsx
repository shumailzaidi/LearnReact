function EventFunctions(){

const City=(cityName)=>{
alert(cityName);

}
return (
<>
<h1>Events  call in react</h1>
<button onClick={()=>City("Delhi")}>Delhi</button><br /><br />
<button onClick={()=>City("Muzaffarnager")}>Muzaffarnager</button>

</>
)

}
export default EventFunctions;