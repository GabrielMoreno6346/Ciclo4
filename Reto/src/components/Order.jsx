import '../static/Order.css'
import {Link} from './Link'
import {ShowDate} from './ShowDate'
import React from "react";
import {Button} from './Button'

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
            <li className='btnGroup'>
                <Button BDisplay="Editar" className="btn btn-dark btnOrder" addr="/UpdateOrder" obj={OrderData}></Button>
                <button className="btn btn-dark btnOrder"
                onClick={()=>{confirm("¿Está seguro que desea eliminar esta orden")}}>Eliminar</button>
            </li>
        </ul>
    )
}