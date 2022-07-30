import {NavLink,Link} from 'react-router-dom'
import React, { useState, useEffect} from 'react';
import './index.scss'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faHome, faUser, faEnvelope, faFolder ,faBars, faXmark} from '@fortawesome/free-solid-svg-icons'
import {faTwitter, faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons'
import Logo from '../../assets/logo.png'


const SideBar = () => {
    const [openBar, setOpenBar] = useState(false)
    let activeStyle  = {
        color: "#3fa040"
    }
    function navAnim(){
        var aside = document.querySelector('aside')
        aside.classList.toggle('show')
        setOpenBar(!openBar)
    }
    
    useEffect(() =>{
      var btn = document.querySelector(".bar-icon");   
        btn.addEventListener("click", navAnim)
        return(
          () => btn.removeEventListener("click", navAnim)
        )
    })
        return ( 
        
        <aside>
           <Link className="logo" to="/">
              <img src={Logo} alt="my logo"/>
           </Link>
           {
             window.innerWidth <= 600 ? <span className="bar-icon">{openBar ? <FontAwesomeIcon icon={faXmark}/>: <FontAwesomeIcon icon={faBars}/>}</span> 
              : <span className="bar-icon"></span>
           }
          
           <nav>
            <NavLink className={'nav-link'} to="/" style={( isActive ) => isActive ? activeStyle : undefined}>
                <FontAwesomeIcon icon={faHome} color="#4c4d40"/>
            </NavLink>
            <NavLink className={'nav-link'} to="/about" style={({ isActive }) => isActive ? activeStyle : undefined}>
                <FontAwesomeIcon icon={faUser} color="#4c4d40"/>
            </NavLink>
            <NavLink className={'nav-link'} to="/contact" style={({ isActive }) => isActive ? activeStyle : undefined}>
                <FontAwesomeIcon icon={faEnvelope} color="#4c4d40"/>
            </NavLink>
            <NavLink className={'nav-link'} to="/projects" style={({ isActive }) => isActive ? activeStyle : undefined}>
                <FontAwesomeIcon icon={faFolder} color="#4c4d40"/>
            </NavLink>
            
           </nav>
           <ul className="socials">
            <li><a href="https://www.linkedin.com/in/jerry-gathu-7b527a1b2/"><FontAwesomeIcon icon={faLinkedin} color="#4c4d40"/></a></li>
            <li><a href="https://github.com/Gathu17"><FontAwesomeIcon icon={faGithub} color="#4c4d40"/></a></li>
            <li><a href="https://twitter.com/jerry_script"><FontAwesomeIcon icon={faTwitter} color="#4c4d40"/></a></li>
           </ul>
        </aside>
        
     );
}
 
export default SideBar;