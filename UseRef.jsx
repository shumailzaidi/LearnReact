import React, { useRef } from 'react'

function UseRef() {

    const inputName = useRef();
    const h1Ref = useRef();

    function nameHandler() {

        console.log(inputName);
        inputName.current.placeholder = 'Enter Name';
        inputName.current.focus();
        inputName.current.style.color = 'green';
        inputName.current.value = 'Shumail Zaidi';
    }

    function hideShow() {
        if (inputName.current.style.display == "none") {
            inputName.current.style.display = "inline";
        } else {

            inputName.current.style.display = "none";
        }

    }
      

    return (
        <div>
            <h1 ref={h1Ref}>UseRef react js in function</h1>
            <input ref={inputName} type="text" />
            <button onClick={nameHandler}>Enter Name  </button>
            <br /><br />
            <button onClick={hideShow}>Hide/Show</button>
            
        </div>
    )
}

export default UseRef;