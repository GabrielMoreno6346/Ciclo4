import './static/OrdersList.css'
import {Link} from './components/Link'
import {Order} from './components/Order'
import {NavBar} from './components/NavBar'
import {Footer} from './components/Footer'

const AllOrders=[
  {ido:1, date:"2022-11-18", time1:"16:00", time2:"19:30", Largo:"40", Ancho:"30", 
  Alto:"15", Peso:"4", nr: "Vanessa Nuñez", cr: "1453675322", 
  AddRecogida: "Cll 115 No.12-58", CiudadRecogida: "Bogotá", nd:"Jose Ruíz", 
  cd:"135354332", AddEntrega:"Cll 26 No. 39-54", CiudadEntrega:"Bogotá", status:"Cumplido", important:true},  
  {ido:2, date:"2022-11-22", time1:"16:00", time2:"19:30", Largo:"20", Ancho:"40", 
  Alto:"10", Peso:"1", nr: "Vanessa Nuñez", cr: "145367532", 
  AddRecogida: "Cll 115 No.12-58", CiudadRecogida: "Bogotá", nd:"Karla Restrepo", 
  cd:"133574232", AddEntrega:"Cra 28Bis No. 21-33", CiudadEntrega:"Pereira", status:"Guardado", important:true},
  {ido:3, date:"2022-11-28", time1:"16:00", time2:"19:30", Largo:"40", Ancho:"30", 
  Alto:"15", Peso:"4", nr: "Vanessa Nuñez", cr: "145367532", 
  AddRecogida: "Cll 115 No.12-58", CiudadRecogida: "Bogotá", nd:"Mauricio López", 
  cd:"152535243", AddEntrega:"Cll 13 No. 52-13", CiudadEntrega:"Barranquilla", status:"Guardado", important:false},  
  {ido:4, date:"2022-11-20", time1:"16:00", time2:"19:30", Largo:"100", Ancho:"80", 
  Alto:"80", Peso:"15", nr: "Vanessa Nuñez", cr: "145367532", 
  AddRecogida: "Cll 115 No.12-58", CiudadRecogida: "Bogotá", nd:"Miriam Giraldo", 
  cd:"64635734", AddEntrega:"Cll 18 No. 63-31", CiudadEntrega:"Bogotá", status:"Cancelado", important:false},
  {ido:5, date:"2022-11-25", time1:"16:00", time2:"19:30", Largo:"15", Ancho:"15", 
  Alto:"15", Peso:"0.5", nr: "Vanessa Nuñez", cr: "145367532", 
  AddRecogida: "Cll 115 No.12-58", CiudadRecogida: "Bogotá", nd:"Leonardo Zapata", 
  cd:"742478436", AddEntrega:"Cra 31 No. 52-44", CiudadEntrega:"Neiva", status:"Guardado", important:true}
]

function OrdersList() {
  return (
    <div className='OrdersListBody'>
      <NavBar></NavBar>
      <div className='OrdersListContent'>
        <div className='OrdersListMain'>
            <Link addr="/CreateOrder" className="OrdersListLink" LDisplay="Crear Order"></Link>
            <ul className='OrdersListHeader'> 
                <li>Servicio</li>
                <li>Fecha</li>
                <li>Ciudad Entrega</li>
                <li>Dirección Entrega</li>
                <li>Estado</li>
                <li>Acción</li>
            </ul>
            <div className='OrdersListList'>
              {AllOrders.map((order)=>
                <Order OrderData={order}
                key={order.ido}>  
                </Order>
              )}
            </div>
          </div>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default OrdersList