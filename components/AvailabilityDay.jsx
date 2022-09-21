import React, { useState } from 'react';

const AvailabilityDay = ({ isHighlighted }) => {

    return (
        <div  
            className={`h-1 bg-gray-500 border-black rounded-md border-1 hover:bg-ternary hover:text-black hover:cursor-pointer ${isHighlighted && "bg-ternary"}`}
        >
        </div>
    )
}

export default AvailabilityDay;