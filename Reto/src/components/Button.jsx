import React from "react";
import '../static/Button.css'
import { useNavigate } from "react-router-dom";

export const Button = ({BDisplay, addr, className}) => {
    const navigateTo = useNavigate();
    const handleOnClick=() => {
        navigateTo(addr)
    }
    return(
        <button type="text"  className={className} onClick={handleOnClick}>{BDisplay}</button>
    )
}