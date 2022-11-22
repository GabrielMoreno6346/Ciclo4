import React from "react";

export const Input = ({holder,value, handleOnChange, attribute}) => {
    return(
        <input className="form-control subs" id="formGroupExampleInput" type="text" placeholder={holder} value={value} 
        onChange={(event)=>handleOnChange(attribute, event.target.value)}></input>
    )
}


