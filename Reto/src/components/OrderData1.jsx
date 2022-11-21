import '../static/OrderData1.css'
import React, { useState } from 'react'

export const OrderData1=({date, time1, time2, important})=>{
  const [state, setState] = useState({
    date:date, time1:time1, time2:time2, important:important
  })
  const handleOnChange = (atributte, value) => {
    const previousState = { ...state }
    previousState[atributte] = value
    setState(previousState)
  }
  const currentDay = new Date()
  const getDate=() =>{
    const minDate = `${currentDay.getFullYear()}-${currentDay.getMonth()+1}-${currentDay.getDate()+1}`
    return minDate
  }
  const getTime=()=>{
    const minTime = `${currentDay.getHours()}:${currentDay.getMinutes()}`
    return minTime
  }
  const handleOnchangeTime1= (event) =>{
    const selectedtime = event.target.value.split(":")
    const currenttime = getTime().split(":")
    if (parseInt(selectedtime[0])<parseInt(currenttime[0])){
      alert("Solo se puede programar recogidas de paquetes 24 horas después de la hora actual")
    }
    else if ((parseInt(selectedtime[0])===parseInt(currenttime[0]))&&
    (parseInt(selectedtime[1])<parseInt(currenttime[1]))){
      alert("Solo se puede programar recogidas de paquetes 24 horas después de la hora actual")
    }
  }
  const handleOnchangeTime2= (event) =>{
    const selectedtime2 = event.target.value.split(":")
    const currenttime = getTime().split(":")
    if (parseInt(selectedtime2[0])<parseInt(currenttime[0])){
      alert("Solo se puede programar recogidas de paquetes 24 horas después de la hora actual")
    }
    else if ((parseInt(selectedtime2[0])===parseInt(currenttime[0]))&&
    (parseInt(selectedtime2[1])<parseInt(currenttime[1]))){
      alert("Solo se puede programar recogidas de paquetes 24 horas después de la hora actual")
    }
  }

  return (
    <div className='OrderData1Body'>
      <div className='OrderData1Form'>
        <div className='dat'>
          <input type="date" min={getDate()} value={state.date} 
            onChange={(event) => handleOnChange("date", event.target.value)}></input>
          <input type="time" min={getTime()} value={state.time1} 
            onChange={(event) => {handleOnChange("time1", event.target.value); handleOnchangeTime1(event)}}></input>
          <span>-</span>
          <input type="time" min={getTime()} value={state.time2}
            onChange={(event) => {handleOnChange("time2", event.target.value); handleOnchangeTime2(event)}}></input>
        </div>
        <div className='delic'>
          <span>¿Es mercancía delicada?</span>
          <div className='delicr'>
            <div>
              <input type="radio" name="d" checked={state.important} onChange={(event) => handleOnChange("important", true)}></input>
              <label>Sí</label>
            </div>
            <div>
              <input type="radio" name="d" checked={!state.important} onChange={(event) => handleOnChange("important", false)}></input>
              <label>No</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


  

  