import React from "react";
import '../static/New.css'

export const New = ({Title, SubTitle, Content}) => {
    return(
        <div className='new'>
            <div className='newTitle'>{Title}</div>
            <div className='newsubTitle'>{SubTitle}</div>
            <div className='newMain'>{Content}</div>
        </div>
    )
}