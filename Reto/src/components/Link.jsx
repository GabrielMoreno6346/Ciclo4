import React from "react";
import {Link as Linkrrd} from "react-router-dom"
import '../static/Link.css'

export const Link = ({addr, LDisplay, data}) => {
    console.log(data)
    return(
        // <a href={addr}>{LDisplay}</a>
         <Linkrrd
            to={addr}
            state={data}
            >
            {LDisplay}
        </Linkrrd>

    )
}