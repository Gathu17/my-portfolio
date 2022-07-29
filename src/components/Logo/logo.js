import LogoJ from '../../assets/bglogo.png'
import React, { useEffect } from 'react';
import './index.scss'
//import gsap from 'gsap-trial'

const Logo = () => {

    return ( 
        <div className="logo-container">
            <img src={LogoJ} className="logo-img" alt="J" />
            

        </div>
     );
}
 
export default Logo;