import '../static/Order.css'
import {Link} from './Link'
import {ShowDate} from './ShowDate'
import React from "react";

export const Order = ({OrderData}) => {
    console.log(OrderData.date)
    return(
        <ul className='Orders'>
            <Link addr={`/UpdateOrder`} LDisplay={OrderData.ido}
            data={OrderData}></Link>
            <li><ShowDate date={OrderData.date}></ShowDate></li>
            <li>{OrderData.CiudadEntrega}</li>
            <li>{OrderData.AddEntrega}</li>
            <li>{OrderData.status}</li>
        </ul>
    )
}