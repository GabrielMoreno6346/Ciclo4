import '../static/NavBar.css'
import Ya from '../static/Logo.png'
import {Button} from './Button'
import {LinkB} from './LinkB'

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
                        <LinkB addr='/Home' LDisplay="INICIO"></LinkB>
                        <div></div>
                        <LinkB addr='/' LDisplay="ACERCA DE NOSOTROS"></LinkB>
                        <div></div>
                        <LinkB addr='/' LDisplay="SERVICIOS"></LinkB>
                    </div>
                    <Button BDisplay="Ingresar" addr="/Login" className="btn btn-light"></Button>
                </div>
            </div>
        </div>
    )
}