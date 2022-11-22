import './static/Login.css'
import {Button} from './components/Button'
import {Input} from './components/Input'
import {Link} from './components/Link'
import {NavBar} from './components/NavBar'
import {Footer} from './components/Footer'

function Login() {
  return (
    <div className='LoginBody'>
      <NavBar></NavBar>
      <div className='LoginContent'>
        <span>Iniciar Sesión</span>
        <div className='LoginForm'>
          <Link addr='/SignUp' LDisplay="Registrarse"></Link>
          <Input className="imp" holder="Usuario"></Input>
          <Input className="imp" holder="Contraseña"></Input>
          <Button className= "btn btn-light Loginbtn" BDisplay="Login" addr="/OrdersList"></Button>
        </div>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default Login
