import './static/Login.css'
import {Button} from './components/Button'
import {Input} from './components/Input'
import {Link} from './components/Link'

function Login() {
  return (
    <div className='LoginBody'>
      <div className='LoginForm'>
        <Link addr='/SignUp' LDisplay="Registrarse"></Link>
        <Input holder="Usuario"></Input>
        <Input holder="Contraseña"></Input>
        <Button BDisplay="Login" addr="/OrdersList"></Button>
      </div>
    </div>
  )
}

export default Login
