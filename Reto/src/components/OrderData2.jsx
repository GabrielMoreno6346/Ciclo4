import '../static/OrderData2.css'
import React,{useState} from 'react'
import {Input} from './Input'

export const OrderData2=({Largo, Ancho, Alto, Peso, nr, cr,
AddRecogida, CiudadRecogida, nd, cd, AddEntrega, CiudadEntrega, status})=>{
  const [state, setState] = useState({
    Largo: Largo, Ancho: Ancho, Ciudadentrega:CiudadEntrega, status:status,
    Alto: Alto, Peso: Peso, nr: nr, cr: cr, AddRecogida:AddRecogida, 
    CiudadRecogida:CiudadRecogida, nd:nd, cd:cd, AddEntrega:AddEntrega,
  })

  const handleOnChange = (atributte, value) => {
    const previousState = { ...state }
    previousState[atributte] = value
    setState(previousState)
  }

  return (
    <div className='OrderData2Cont'>
      <div className='measures'>
        <div><Input className="form-control subs" holder="Largo (cm)" value={state.Largo} attribute="Largo" handleOnChange={handleOnChange}></Input></div>
        <div><Input className="form-control subs" holder="Ancho (cm)" value={state.Ancho} handleOnChange={handleOnChange}></Input></div>
        <div><Input className="form-control subs" holder="Alto (cm)" value={state.Alto} handleOnChange={handleOnChange}></Input></div>
        <div><Input className="form-control subs" holder="Peso (kg) "value={state.Peso} handleOnChange={handleOnChange}></Input></div>
      </div>
      <div><Input className="form-control subs" holder="Nombre remitente" value={state.nr} handleOnChange={handleOnChange}></Input></div>
      <div><Input className="form-control subs" holder="Nombre destinatario" value={state.nd} handleOnChange={handleOnChange}></Input></div>
      <div><Input className="form-control subs" holder="Cédula/Nit remitente" value={state.cr} handleOnChange={handleOnChange}></Input></div>
      <div><Input className="form-control subs" holder="Cédula/Nit destinatario" value={state.cd} handleOnChange={handleOnChange}></Input></div>
      <div><Input className="form-control subs" holder="Dirección recogida" value={state.AddRecogida} handleOnChange={handleOnChange}></Input></div>
      <div><Input className="form-control subs" holder="Dirección entrega" value={state.AddEntrega} handleOnChange={handleOnChange}></Input></div>
      <div><Input className="form-control subs" holder="Ciudad recogida" value={state.CiudadRecogida} handleOnChange={handleOnChange}></Input></div>
      <div><Input className="form-control subs" holder="Ciudad entrega" value={state.Ciudadentrega} handleOnChange={handleOnChange}></Input></div>
    </div>
  )
}