import { Link } from 'react-router-dom'
import '../../style/index.scss'
import Footer from '../Footer/index'

function Error() {
    return (
   <div className='error'>
    <p className='error-num'>404</p>
    <p className='error-phrase'>Oups! La page que vous demandez n'existe pas.
    </p>
    <Link to="/" className='link-error'>Retourner sur la page d'accueil</Link>
    <Footer></Footer>
    </div>
    )
  }
  
  export default Error