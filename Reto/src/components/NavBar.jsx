import '../static/NavBar.css'
import Ya from '../static/Logo.png'
import {Button} from './Button'
import {Link} from './Link'

export const NavBar = () => {
    return(
        <div className='NavBarCont'>
            <div className='NavBar2'>
                <div className='logo'>
                    <img src={Ya} alt="YaLogo"/>
                    <span className='name'>InstaYa</span>
                    <span>envíos al instante</span>
                </div>
                <div className='menu'>
                    <div className='links'>
                        <Link addr='/' LDisplay="INICIO" className="LinkNav"></Link>
                        <div></div>
                        <Link addr='/AboutUs' LDisplay="ACERCA DE NOSOTROS" className="LinkNav"></Link>
                        <div></div>
                        <Link addr='/OrdersList' LDisplay="SERVICIOS" className="LinkNav"></Link>
                    </div>
                    <Button BDisplay="Ingresar" addr="/Login" className="btn btn-light"></Button>
                </div>
            </div>
        </div>
    )
}