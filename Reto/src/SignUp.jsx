import './static/SignUp.css'
import {Button} from './components/Button'
import {Input} from './components/Input'

function SignUp() {
    return (
      <div className='SignUpBody'>
        <div className='SignUpForm'>
          <Input holder="Nombres"></Input>
          <Input holder="Usuario"></Input>
          <Input holder="Contraseña"></Input>
          <Input holder="Correo"></Input>
          <Button BDisplay="Crear" addr="/OrdersList"></Button>
        </div>
      </div>
    )
  }
  
export default SignUp