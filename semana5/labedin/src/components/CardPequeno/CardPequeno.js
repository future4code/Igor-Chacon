import React from 'react';
import './CardPequeno.css'

function CardPequeno(props) {
    return (
        <div className="littlecard-container">
            <div>
                <p>{ props.email }</p>
                <p>{ props.cel }</p>
            </div>
        </div>
    )
}

export default CardPequeno;