import './static/SignUp.css'
import {Button} from './components/Button'
import {Input} from './components/Input'
import {NavBar} from './components/NavBar'
import {Footer} from './components/Footer'

function SignUp() {
    return (
      <div className='SignupBody'>
        <NavBar></NavBar>
        <div className='SignUpContent'>
          <div className='SignUpForm'>
            <Input holder="Nombres"></Input>
            <Input holder="Usuario"></Input>
            <Input holder="Contraseña"></Input>
            <Input holder="Correo"></Input>
            <Button BDisplay="Crear" addr="/OrdersList"></Button>
          </div>
        </div>
        <Footer></Footer>
      </div>
    )
  }
  
export default SignUp