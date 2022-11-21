import React from "react";
import '../static/LinkB.css'

export const LinkB = ({addr, LDisplay}) => {
    return(
        <a id="b" href={addr}>{LDisplay}</a>
    )
}