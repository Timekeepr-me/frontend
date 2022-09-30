import React, { useState } from 'react';

const AvailabilityDay = ({ isHighlighted, i, hour }) => {

    return (
        <div  
            key={`${hour}-${i}`}
            className={`h-1 bg-gray-500 border-black border-1 ${isHighlighted && "bg-ternary"}`}
        >
        </div>
    )
}

export default AvailabilityDay;