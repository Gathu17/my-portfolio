import Sidebar from '../../components/Sidebar'
import {Outlet} from 'react-router-dom'
import './index.scss'

const Layout = () => {
    return ( 
        <div className="Layout-container">
            <Sidebar/>
            <div className="page">
                <Outlet/>
            </div>
        </div>
     );
}
 
export default Layout;