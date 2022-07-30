import React, { useState , useEffect } from 'react';
import AnimatedLetters from '../../util/AnimatedLetters/AnimatedLetters';
import './index.scss'
import Amg from '../../assets/Aimg.png'
import Emg from '../../assets/Eimg.png'
import Smg from '../../assets/Simg.png'
import { useEffectHook } from '../../util/Effects';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faArrowUpRightFromSquare} from '@fortawesome/free-solid-svg-icons'
const Project = () => {
   const [letterClass, setLetterClass] = useState("text-animate")
   const [slidePause, setSlidePause] = useState(false)  
   useEffect(() => {
       setTimeout(() => {
       setLetterClass("text-animate-hover")
      },4000)
    },[])
   
    function slideShow(){
      var slides = document.querySelectorAll(".slide")   
      
         Array.from(slides).forEach(function(slide){
         if(slide.classList.contains('_3')){
            slide.classList.remove(`_3`)
            slide.classList.add('_1')
         }else if(slide.classList.contains('_2')){
            slide.classList.remove('_2')
         slide.classList.add('_3')
         }else {
            slide.classList.remove('_1')
            slide.classList.add('_2')
         
         }
        })
      
  
    }
    useEffectHook('mouseover','.slide-container',(e)=>{
     // e.target.style.transform = 'scale(2)'
      setSlidePause(true)
   })
   useEffectHook('mouseout','.slide-container',(e)=>{
         // e.target.style.transform = 'scale(1)'
          setSlidePause(false)
         
       })
    useEffectHook('touchstart','.slide-container',(e)=>{
         e.target.style.transform = 'scale(1.5)'
         setSlidePause(true)
      })
    useEffectHook('touchend','.slide-container',(e)=>{
             e.target.style.transform = 'scale(1)'
             setSlidePause(false)
            
          })   
  
   useEffect(() => {
       
      const interval = setInterval(() => {
         if(!slidePause) {
             slideShow()
         }
        
       },2000)
       return(
         ()=> {
         
         clearInterval(interval)
      }
       )
   })
    return ( 
        <div className="project-container">
           <h1><AnimatedLetters
               letterClass={letterClass}
               strArray={"MY".split("")}
               index={5}
           /><span>  </span>
            <AnimatedLetters
               letterClass={letterClass}
               strArray={"PROJECTS".split("")}
               index={8}
           />
           </h1>

           <div className="p">These are some of the projects that I have worked on.</div>
           <div className="slide-container">
               <div className="slide _1">
               <img src={Amg} alt='s'style={{width: '100%', height: '100%'}}  />   
                <div className="info">
                 <h3>API app</h3> 
                   <p>A game app built with HTML, CSS, and JavaScript and fetches data from different APIs.</p>
                   <button as='a' href="https://myapis.netlify.app">LIVE</button><a href="https://github.com/Gathu17/Api-s"><FontAwesomeIcon icon={faArrowUpRightFromSquare}/></a>
                   
                </div>
                
               </div>
               <div className="slide _2">
               <img src={Emg} alt='s'style={{width: '100%', height: '100%'}}  />
                <div className="info">
                   <h3>E-commerce app</h3> 
                   <p>An online store web app built with reactjs, nodejs,graphql and styled with styled-components.</p> 
                   <button as="a" href="https://myduka.netlify.app">LIVE</button><a href="https://github.com/Gathu17/E-commerce-client"><FontAwesomeIcon icon={faArrowUpRightFromSquare}/></a>
                </div>
                
               </div>
               <div className="slide _3">
               <img src={Smg} alt='s'style={{width: '100%', height: '100%'}}  />
                <div className="info">
                   <h3>Social app</h3> 
                   <p>A posting app built with Reactjs and GraphQl API that fetches data from MongoDB. The app was styled with semantic-ui.</p>
                   <button as='a' href="https://mysocial254.netlify.app">LIVE</button><a href="https://github.com/Gathu17/social-client"><FontAwesomeIcon icon={faArrowUpRightFromSquare}/></a>
                </div>
                
               </div>
           </div>
        </div>
     );
}
 
export default Project;