function JsCode() {
    const fullName = "Shumail zaidi";
    let age = 25;
    let x = 20;
    let y = 30;
const emp={

empName:"shumail zaidi",
empSal:"60000" ,
empEmail:"shumailzaidi779@gmail.com"

}
let colors=["Red", "Green", "Blue", "Yellow"];

let myImg =" https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    return (
        <>

            <h1>Javascript code  in jsx</h1>
            <input type="text" value={fullName} />
            <br />
            <br />
            <img src={myImg} width="300px" alt="Nature" />
            <h2>{fullName} is {age} Year old</h2>
            <h2>{x + y}</h2>
            <h2>{emp.empEmail}</h2>
            <h2>colors : {colors [3] }</h2>
            
        </>
    )


}
export default JsCode;