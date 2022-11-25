import React from "react";

export const Input = ({holder,value, handleOnChange, attribute, className}) => {
    return(
        <input className={className} type="text" placeholder={holder} value={value} 
        onChange={(event)=>handleOnChange(attribute, event.target.value)}></input>
    )
}


