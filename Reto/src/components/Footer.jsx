import React from "react";
import '../static/Footer.css'
import {Link} from './Link'
import facebook from '../static/FacebookLogo.png'
import Twitter from '../static/TwitterLogo.png'
import Instagram from '../static/InstagramLogo.png'
import email from '../static/e-mailLogo.png'
import Phone from '../static/Phone.png'

export const Footer = () => {
    return(
        <div className="FooterCont">
            <div className="Footer1 footsubcont">
                <div>
                    <span>Empresa</span>
                    {/* <div className="lists">
                        <div className="sublist">
                            <Link addr='/' LDisplay="Terminos y condiciones"></Link>
                        </div>
                        <div className="sublist">
                            <Link addr='/' LDisplay="Politica de privacidad"></Link>
                        </div>
                    </div> */}
                    <div className="lists">
                        <div className="sublist">
                            <Link addr='/' LDisplay="Terminos y condiciones"></Link>
                            <Link addr='/' LDisplay="Politica de privacidad"></Link>
                        </div>
                    </div>
                </div>
                <div>
                    <span className="subspan">Suscríbete</span>
                    <div class="mb-3 suscribir">
                        <label for="formGroupExampleInput" class="form-label">Suscribete para obtener neustras últimas noticias</label>
                        <div className="emailsub">
                            <input type="text" className="form-control subs" id="formGroupExampleInput" placeholder="Email"></input>
                            <button type="button" class="btn btn-dark">Suscribirse</button>
                        </div>
                    </div>
                </div>
                <div>
                    <span>Links de interés</span>
                    {/* <div className="lists">
                        <div className="sublist">
                            <Link addr='/' LDisplay="Servicios"></Link>
                        </div>
                        <div className="sublist">
                            <Link addr='/' LDisplay="Acerca de nosotros"></Link>
                        </div>
                    </div> */}
                    <div className="lists">
                        <div className="sublist">
                            <Link addr='/' LDisplay="Servicios"></Link>
                            <Link addr='/' LDisplay="Acerca de nosotros"></Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className='Footer2'>
                    <div className='Redes'>
                        <a href="https://www.facebook.com">
                            <img src={facebook} alt="FacebookLogo"/>
                        </a>
                        <a href="https://twitter.com">
                            <img src={Twitter} alt="TwitterLogo"/>
                        </a>
                        <a href="https://www.instagram.com">
                            <img src={Instagram} alt="InstragramLogo"/>
                        </a>
                        <div className='line1'></div>
                        <div className='line2'></div>
                    </div>
                    < div className='Contactos1'>
                        <div className='phone'>
                            <img src={Phone} alt="e-mailLogo"/> 
                            <span>+57 317-894-9521</span>
                        </div>
                        <div className='email'>
                            <img src={email} alt="e-mailLogo"/>
                            <span>support@instaya.com</span>
                        </div>
                    </div>
                </div>
            </div>
    )
}