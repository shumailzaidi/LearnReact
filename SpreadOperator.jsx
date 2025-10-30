import React from 'react'

function SpreadOperator() {

// const Fruits = ['apple','Banana','Grapes'];
// const moreFruits=[... Fruits ,'mango','Date',]
// console.log(moreFruits);
const student={

name:'Sara',
age:10

}
const newstudent={...student,class:'5th'}
console.log(newstudent);
  return (

   <div>SpreadOperator</div> 

  )
}

export default SpreadOperator;