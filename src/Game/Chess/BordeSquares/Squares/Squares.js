import './Squares.css';
import React from 'react'

function Squares({children}) {
    return (
        <div className="squares">
            {children}
        </div>
    )
}

export default Squares
