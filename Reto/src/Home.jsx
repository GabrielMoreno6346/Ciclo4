import './static/Home.css'
import {Button} from './components/Button'
import {NavBar} from './components/NavBar'
import {Footer} from './components/Footer'
import BlankProfilePicture from './static/BlankProfilePicture.jpg'

function Home() {
    return (
      <div className="cont">
        <NavBar className="NavBar"></NavBar>
        <div className="HomeContent">
          <div className="gest"></div>
          <div className="comm">
            <div>
              <div className='Lorem Ltitle'>Lo que dicen nuestros usuarios:</div>
            </div>
            <div>
              <div className='Lorem'></div>
            </div>
            <div>
              <img src={BlankProfilePicture}></img>
              <div className='Lorem'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo enim quae ipsa tempora possimus provident vel dolorum ut placeat quaerat, alias ex omnis, necessitatibus quam, quod neque dicta doloremque consectetur!</div>
            </div>
            <div>
              <img src={BlankProfilePicture}></img>
              <div className='Lorem'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo enim quae ipsa tempora possimus provident vel dolorum ut placeat quaerat, alias ex omnis, necessitatibus quam, quod neque dicta doloremque consectetur!</div>
            </div>
            <div>
              <img src={BlankProfilePicture}></img>
              <div className='Lorem'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo enim quae ipsa tempora possimus provident vel dolorum ut placeat quaerat, alias ex omnis, necessitatibus quam, quod neque dicta doloremque consectetur!</div>
            </div>
            <div>
              <img src={BlankProfilePicture}></img>
              <div className='Lorem'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo enim quae ipsa tempora possimus provident vel dolorum ut placeat quaerat, alias ex omnis, necessitatibus quam, quod neque dicta doloremque consectetur!</div>
            </div>           
          </div>
          <div className="newsSection">
            <div className='newsMark'>Noticias</div>
            <div className='newsContent'>
              <div className='new'>
                <div className='newTitle'>Afectación de entregas por órden público</div>
                <div className='newsubTitle'>10 may. 2022</div>
                <div className='newMain'>
                  Debido a las manifestaciones públicas en el marco del paro nacional que se ha presentado en los últimos días, se han presentado problemas de congestión de las vías, razón por la cuál no se han podido realizar eficazmente los últimos envíos. Seguiremos informando cualquier novedad, gracias por su comprensión
                </div>
              </div>
              <div className='new'>
                <div className='newTitle'>Nueva ley de protección al medio ambiente</div>
                <div className='newsubTitle'>17 abr. 2022</div>
                <div className='newMain'>
                  El actual gobierno anuncia nueva ley de protección al medio ambiente, la cual indica que se deben tomar nuevos parámetros en el empaquetado de los productos, en pro de la reutilización de las materias primas, con el fin de crear un consumo responsable que busque la sostenibilidad ambiental.
                </div>
              </div>
              <div className='new'>
                <div className='newTitle'>¿Cuáles son los métodos de pago más usados en Colombia?</div>
                <div className='newsubTitle'>03 nov. 2022</div>
                <div className='newMain'>
                  De acuerdo a una investigación realizada por la Universidad Nacional de Colombia, en la actualidad los colombianos están prefieriendo las compras y procesos en línea, razón por la cuál incrementan cada vez más los métodos de pago en línea y el uso de tarjetas de crédito.
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer className="Footer"></Footer>
      </div>
    )
  }
  
export default Home