import React from "react";

export const Input = ({holder,value, handleOnChange, attribute}) => {
    return(
        <input type="text" placeholder={holder} value={value} 
        onChange={(event)=>handleOnChange(attribute, event.target.value)}></input>
    )
}


