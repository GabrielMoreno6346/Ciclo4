import './static/Home.css'
import {NavBar} from './components/NavBar'
import {Footer} from './components/Footer'
import {Comment} from './components/Comment'
import {New} from './components/New'
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
          </div>
          <div className="newsSection">
            <div className='newsMark'>Noticias</div>
            <div className='newsContent'>
              <New 
              Title="Afectación de entregas por órden público"
              SubTitle="10 may. 2022"
              Content="Debido a las manifestaciones públicas en el marco del paro nacional que se ha presentado en los últimos días, se han presentado problemas de congestión de las vías, razón por la cuál no se han podido realizar eficazmente los últimos envíos. Seguiremos informando cualquier novedad, gracias por su comprensión"
              ></New>
              <New 
              Title="Nueva ley de protección al medio ambiente"
              SubTitle="17 abr. 2022"
              Content="El actual gobierno anuncia nueva ley de protección al medio ambiente, la cual indica que se deben tomar nuevos parámetros en el empaquetado de los productos, en pro de la reutilización de las materias primas, con el fin de crear un consumo responsable que busque la sostenibilidad ambiental."
              ></New>
              <New 
              Title="¿Cuáles son los métodos de pago más usados en Colombia?"
              SubTitle="03 nov. 2022"
              Content="De acuerdo a una investigación realizada por la Universidad Nacional de Colombia, en la actualidad los colombianos están prefieriendo las compras y procesos en línea, razón por la cuál incrementan cada vez más los métodos de pago en línea y el uso de tarjetas de crédito."
              ></New>
            </div>
          </div>
        </div>
        <Footer className="Footer"></Footer>
      </div>
    )
  }
  
export default Home