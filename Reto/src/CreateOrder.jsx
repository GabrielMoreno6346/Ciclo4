import './static/CreateOrder.css'
import {Button} from './components/Button'
import {OrderData1} from './components/OrderData1'
import {OrderData2} from './components/OrderData2'

function CreateOrder() {
  return (
    <div className='CreateOrderBody'>
      <div className='CreateOrderForm'>
          <OrderData1></OrderData1>
          <OrderData2></OrderData2>
          <div className="CreateOrderBtn">
            <Button BDisplay="Crear Orden" addr="/OrdersList" 
            ></Button>
          </div>
      </div>
    </div>
  )
}

export default CreateOrder