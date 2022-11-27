import './static/AboutUs.css'
import {NavBar} from './components/NavBar'
import {Footer} from './components/Footer'
import History from './static/Historia.jpg'
import quienes from './static/quienes-somos.jpg'
import reconocimientos from './static/reconocimientos.jpg'

function AboutUs() {
  return (
    <div className='AboutUsBody'>
      <NavBar></NavBar>
      <div className='AboutUsContent'>
        <span className='AUTitle'>Acerca de Nosotros</span>
        <div>
          <span className='SubAUTitle'>Historia</span>
          <div  className='SectionAU'>
            <img src={History} alt="HistoryPic"></img>
            <span>
              Todo surgió hace 25 años, cuando el creador de instaYA era un repartidor de a pie, quién llevaba paquetes para las personas de su comunidad, con lo poco que ganaba reunió dinero para comprar una cicla y así expandir sus servicios a comunidades cercanas. Se caracterizó siempre por su buen entusiasmo y gran hábilidad para ofrecer su trabajo. Sus ganas de salir adelante le impidieron ser una persona conformista, por lo que pensó en crear el gran imperio de gestión y envío de paquetes que hoy conocemos como instaYA. De repartidor de a pie a un gran empresario con multiples sedes a nivel nacional, una historia impactante digna de ser conocida.
            </span>
          </div>
        </div>
        <div>
          <span className='SubAUTitle'>¿Quiénes Somos?</span>
          <div  className='SectionAU'>
            <img src={quienes} alt="WhoAreWePic"></img>
            <span>
              Somos una empresa de envíos Colombiana,  que nació hace 25 años con el propósito de conectar a los colombianos a través de un servicio ágil, rápido y eficiente, de la mano de un cuerpo humano que se ha caracterizado por sus valores y principios
            </span>
          </div>
        </div>
        <div>
          <span className='SubAUTitle'>Reconocimientos</span>
          <div className='SectionAU'>
            <img src={reconocimientos} alt="AwardsPic"></img>
            <ul>
              <li>Reconocimiento por parte de...</li>
              <li>Condecoración...</li>
              <li>Mención al Mérito Empresarial...</li>
              <li>Premio al Mérito Ejecutivo...</li>
            </ul>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default AboutUs