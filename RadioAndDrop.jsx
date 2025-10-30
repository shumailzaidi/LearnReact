import { useState } from './App';
 function RadioAndDrop() {
    const [gender, setGender] = useState("Male");
    const [State, setState] = useState("Delhi");
    return (
        <div style={{ padding: "5px" }}>
            <h1>Radio Buttons And Drops</h1>
            <h3>Select Gender</h3>
            <input type="Radio" checked={gender == 'Male'} onChange={(event) => setGender(event.target.value)} name='Male' id='Male' value={'Male'} />
            <label htmlFor="Male">Male</label>
            <input type="Radio" checked={gender == "Female"} onChange={(event) => setGender(event.target.value)} name='Female' id='Female' value={"Female"} />
            <label htmlFor="Female">Female</label>
            <h4 style={{ color: 'green' }}>Gender : {gender}</h4>
            <br />
            <h3>Select State</h3>
            <select defaultValue={"Delhi"} onChange={(event) => setState(event.target.value)} name="" id="">
                <option value="Delhi">Delhi</option>
                <option value="Muzaffarnager">Muzaffarnager</option>
                <option value="Panjab">Panjab</option>
                <option value="Madhayapardesh">Madhayapardesh</option>
                <option value="Gujrat">Gujrat</option>
                <option value="Rajhestan">Rajhestan</option>
                <option value="Pune">Pune</option>
                <option value="Chandigard">Chandigard</option>
            </select>
            <br /><br />
            <h3 style={{ color: "green" }}>Seleted State :  {State}</h3>
        </div>
    );
}

export default RadioAndDrop;