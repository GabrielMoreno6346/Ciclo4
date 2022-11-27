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
          <div>
            <span>Registrarse</span>
            <p>Registrar tu usuario nunca fue tan sencillo.</p>
            <p>Ingresa tus datos y comienza a usar nuestros servicios YA.</p>
          </div>
          <div className='SignUpForm'>
            <Input holder="Nombres" className="form-control subs"></Input>
            <Input holder="Usuario" className="form-control subs"></Input>
            <Input holder="Contraseña" className="form-control subs"></Input>
            <Input holder="Correo" className="form-control subs"></Input>
            <Button BDisplay="Crear" addr="/OrdersList" className="btn btn-light btnSignUp"></Button>
          </div>
        </div>
        <Footer></Footer>
      </div>
    )
  }
  
export default SignUp