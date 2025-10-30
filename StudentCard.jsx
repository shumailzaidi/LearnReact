import React from 'react'
import card from './CSS/card.module.css';

function StudentCard() {
    return (
        <div>
            <div className={card.card}>

                <h1 className={card.heading}>Student Card</h1>
                <img className={card.img} style={{border:'2px solid gray'}} src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=870" alt="" />
                <div>

                    <h6>Handphone Advance level</h6>
                    <h5>Prices :Rs.530 only</h5>
                </div>

            </div>
        </div>
    )
}

export default StudentCard;