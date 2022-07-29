import {NavLink,Link} from 'react-router-dom'
import './index.scss'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faHome, faUser, faEnvelope, faFolder} from '@fortawesome/free-solid-svg-icons'
import {faTwitter, faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons'
import Logo from '../../assets/logo.png'


const SideBar = () => {
    let activeStyle  = {
        color: "#3fa040"
    }
        return ( 
        
        <aside>
           <Link className="logo" to="/">
              <img src={Logo} alt="my logo"/>
           </Link>
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