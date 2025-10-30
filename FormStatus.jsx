import React from 'react'
import { useFormState } from 'react-dom';
function FormStatus() {

    async function handleForm() {
        alert("Form Submitted Successfully");
        await new Promise((resolve) => setTimeout(resolve, 4000));
        console.log("Form processing completed ");
    }
    function MyForm() {
        const {panding}=useFormState();
        console.log(panding);
        return (
            <>

<input type="text" placeholder='Enter Your Name' />
                <br /><br />
                <input type="tel" placeholder='Enter Your Phone Number' />
                <br /><br />
                <input type="email" placeholder='Enter Your Email' />
                <br /><br />
                <button disabled={panding}>{panding?'Submitting':'Submit'}</button>

            </>


        )

    }
    return (
        <div>
            <form action={handleForm}>

                <MyForm />


            </form>

        </div>
    )
}

export default FormStatus;