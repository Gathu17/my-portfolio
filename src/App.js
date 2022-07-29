import {BrowserRouter, Routes,Route} from 'react-router-dom'
import './App.scss';
import Home from './Pages/Home/Home'
import Layout from './Pages/Layout'
import About from './Pages/About/About'
import Contact from './Pages/Contact'
import Projects from './Pages/Projects'

function App() {
  return (
    <BrowserRouter>
       <Routes>
        <Route exact path ="/" element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path ="/about" element={<About/>}/>
          <Route path ="/contact" element={<Contact/>}/>
          <Route path ="/projects" element={<Projects/>}/>
        </Route>
       </Routes>
       
    </BrowserRouter>
  );
}

export default App;
