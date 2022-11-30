import './static/UpdateOrder.css'
import {Button} from './components/Button'
import {OrderData1} from './components/OrderData1'
import {OrderData2} from './components/OrderData2'
import { useLocation, useParams } from "react-router-dom";
import {NavBar} from './components/NavBar'
import {Footer} from './components/Footer'

function UpdateOrder(props) {
  const {ido, date, time1, time2, Largo, Ancho, Alto, Peso, nr, cr, AddRecogida,
  CiudadRecogida, nd, cd, AddEntrega, CiudadEntrega, status, important} = useLocation().state  
  return (
    <div className='UpdateOrderBody'>
      <NavBar></NavBar>
      <div className="UpdateOrderContent">
        <div className='UpdateOrderChart'>
          <div className='UpdateOrderForm'>
            <OrderData1  title="Actualizar Orden" date={date} time1={time1} time2={time2} important={important}></OrderData1>
            <OrderData2
              ido={ido} Alto={Alto} Largo={Largo} Ancho={Ancho}  Peso={Peso} nr={nr} cr={cr}
              AddRecogida={AddRecogida} CiudadRecogida={CiudadRecogida} nd={nd} cd={cd} AddEntrega={AddEntrega}
              CiudadEntrega={CiudadEntrega} status={status}>
            </OrderData2>
            <Button BDisplay="Actualizar Orden" addr="/OrdersList" className="btn btn-dark UpdateOrderbtn"></Button>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default UpdateOrder