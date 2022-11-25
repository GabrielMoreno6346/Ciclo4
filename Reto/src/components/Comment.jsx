import React from "react";
import '../static/Comment.css'
import BlankProfilePicture from '../static/BlankProfilePicture.jpg'

export const Comment = ({className}) => {
    return(
        <div className="commcont">
            <img src={BlankProfilePicture} alt={BlankProfilePicture} className={className}/>
            <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat perspiciatis, aliquam molestias, magnam neque minus incidunt eligendi temporibus omnis perferendis sed et dolorem rem maiores impedit velit dolor porro! Perspiciatis.</div>
        </div>
    )
}