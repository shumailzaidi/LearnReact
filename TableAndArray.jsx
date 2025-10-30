import React from 'react'
import EmpCard from './EmpCard';

function TableAndArray() {

    const empInfo=[

        {
id:'1',
name:"shumail zaidi",
age :"23",
Salary:"50000",
Email :"shumailzaidi77@gmail.com",

},
{
id:'2',
name:"wafa zaidi",
age :"25",
Salary:"56000",
Email :"wafazaidi@gmail.com",

},
{
id:'3',
name:"Ana zaidi",
age :"24",
Salary:"59000",
Email :"Anazaidi@gmail.com",

},
{
id:'4',
name:"Nabeel zaidi",
age :"27",
Salary:"90000",
Email :"Nabeelzaidi@gmail.com",

},
{
id:'5',
name:"Faraz zaidi",
age :"34",
Salary:"46000",
Email :"Farazzaidi@gmail.com",

},


    ];
  return (
    <div>
<h1>Array  Data with Props</h1>
{

empInfo.map((user)=>(

 <EmpCard data={user.id}/>
))

}

    </div>
  )
}

export default TableAndArray;