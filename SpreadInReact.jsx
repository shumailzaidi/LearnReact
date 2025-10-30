import React from 'react'

function SpreadInReact() {

    const maleStudents=['Aabid','Aadnan','Shuamil',];
    const  femaleStudents=['Sobia','Farwa','Ana'];
    const allStudents =[...maleStudents,...femaleStudents];
    return (
        <div>

<h3>List of All  Students </h3>
<ul>
{

allStudents.map((Students ,index)=>
<li key={index}>{Students}</li>

)

}

</ul>

        </div>
    )
}

export default SpreadInReact;