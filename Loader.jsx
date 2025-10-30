import React, { startTransition } from 'react'
import { useTransition } from 'react';

function Loader() {

    const [isPanding,startTransition] = useTransition();

    function handleUI() {

        startTransition(async () => {
            await new Promise(res => setTimeout(res, 4000))


        })


    }

    return (
        <div>
            <h1>usetransition in react js</h1>


            {  

            isPanding?
            <img src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExeGV3ZXlheXlvbGFpejQ2Zm1yMWdjYWxuZzl6ZGoxOGM5MThqNTFtaiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3oEjI6SIIHBdRxXI40/giphy.gif" style={{width:'150px'}} alt="" /> : null


            }
            <br />
            <button disabled={isPanding} onClick={handleUI}>submit</button>

        </div>
    )
}

export default Loader;