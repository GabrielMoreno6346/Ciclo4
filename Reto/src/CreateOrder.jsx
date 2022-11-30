import './static/CreateOrder.css'
import {Button} from './components/Button'
import {OrderData1} from './components/OrderData1'
import {OrderData2} from './components/OrderData2'
import {NavBar} from './components/NavBar'
import {Footer} from './components/Footer'

function CreateOrder() {
  return (
    <div className='CreateOrderBody'>
      <NavBar></NavBar>
      <div className='CreateOrderContent'>
        <div className='CreateOrderChart'>
          <div className='CreateOrderForm'>
              <OrderData1 title="Crear Orden"></OrderData1>
              <OrderData2></OrderData2>
              <div className="CreateOrderBtn">
                <Button BDisplay="Crear Orden" addr="/OrdersList" className="btn btn-dark btnCreate"></Button>
              </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default CreateOrder