import React from "react";
import '../static/Button.css'
import { useNavigate } from "react-router-dom";

export const Button = ({BDisplay, addr}) => {
    const navigateTo = useNavigate();
    const handleOnClick=() => {
        navigateTo(addr)
    }
    return(
        <button type="text"  className="btn btn-light" onClick={handleOnClick}>{BDisplay}</button>
    )
}