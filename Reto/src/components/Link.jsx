import React from "react";
import {Link as Linkrrd} from "react-router-dom"
import '../static/Link.css'

export const Link = ({addr, LDisplay, data, className}) => {
    console.log(data)
    return(
        // <a href={addr}>{LDisplay}</a>
         <Linkrrd
            className={className}
            to={addr}
            state={data}
            >
            {LDisplay}
        </Linkrrd>

    )
}