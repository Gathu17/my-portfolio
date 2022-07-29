import './index.scss'
import React,{ useLayoutEffect} from 'react';
import {gsap} from 'gsap';


const Background = () => {
 
    const addBox = () =>{
        
      var container = document.getElementById("bg-container")
    var width = container.clientWidth;
      var height = container.clientHeight;
        for(let i=0;i< 5;i++){
         
            for(var j=0; j<5; j++){
                var el = document.createElement ("div")
                el.classList.add("box");
                el.style.minWidth = `${width/10}px`;
                el.style.minHeight = `${width/ 10}px`;
                el.style.borderRadius = "50%"; 
                el.style.display = "inline-block"
                el.style.backgroundColor = "#004f57"
                el.style.marginRight = "20px"
                el.style.marginBottom = "20px"
                el.style.top = `${Math.floor(Math.random() * 100)}%`
                el.style.left = `${Math.floor(Math.random() * 100)}%`
                el.style.position = "absolute"
                
                el.style.zIndex = "-2"
              
               
                container.appendChild(el)
            }
        }
       
      }
     const onMove =  
      useLayoutEffect(() => {
        
            addBox()
        
 var tl = gsap.timeline()
     window.onload = tl.from(".box",{
          scale: 0.001,
          opacity: 0,
          duration: 2,
          stagger: {
            amount:4,
            from: "random",
            axis: "X",
            ease: "elastic.in",
            yoyo: true,
            repeat: -1,
            
          }
        })
        tl.timeScale(1)
        
       
       
        
       
      });
   
    
     
     
}
export default Background;
