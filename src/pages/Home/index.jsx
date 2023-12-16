import React from "react"
import Gabon from '../../assets/gabon.jpeg'
import Footer from "../../Components/Footer"

function Home() {
    return ( 
        <div>
    <div className='home'>
    <img src={Gabon} alt='Logo' className="gabon-image"/>
    <div className='image-overlay'>
        <p><strong>LES CHEMINS DES POSSIBLES</strong></p>
      </div>
    </div>
    <Footer ></Footer>
    </div>
    )
    }
    
    export default Home