import './static/Login.css'
import {Button} from './components/Button'
import {Input} from './components/Input'
import {Link} from './components/Link'
import {NavBar} from './components/NavBar'
import {Footer} from './components/Footer'

function Login() {
  return (
    <div className='LoginBody'>
      <Login></Login>
      <div className='LoginContent'>
        <div className='LoginForm'>
          <Link addr='/SignUp' LDisplay="Registrarse"></Link>
          <Input holder="Usuario"></Input>
          <Input holder="Contraseña"></Input>
          <Button BDisplay="Login" addr="/OrdersList"></Button>
        </div>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default Login
