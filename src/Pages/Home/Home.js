
import AnimatedLetters  from "../../util/AnimatedLetters/AnimatedLetters";
import React, { useState,useEffect, useRef,useLayoutEffect } from 'react'
import './index.scss'
import Background from '../../components/Background/Background'
import {gsap} from 'gsap';
import { MotionPathPlugin } from "gsap/dist/MotionPathPlugin";
import Star from '../../assets/star2.svg'

const Home = () => {
    const [letterClass, setLetterClass] = useState("text-animate")
    const nameArray = ['J','e','r','r','y',',',' ']
   
    const jobArray = ['  ','d','e','v','e','l','o','p','e','r','.']
    const logoRef = useRef();
    const starRef = useRef();
   
     useEffect(() => {
        setTimeout(() => {
        setLetterClass("text-animate-hover")
       },4000)
     },[])

     useLayoutEffect(()=>{
         
         var tl = gsap.timeline();
         tl.fromTo(logoRef.current,{
         
         scale: 0.2,
         opacity: 0.2,
         rotate: "0deg"
         },{
          opacity: 1,
          rotation: "+=360",
          scale: 1,
          ease: "power2.inOut",
          duration: 6,
          transformOrigin: "50% 50%",
          
         })
     },[])

    /*
     function animLogo() {
      gsap.registerPlugin(MotionPathPlugin);
      gsap.set(starRef.current, {xPercent:-50, yPercent:-50});
    
      var star = gsap.timeline();
        star.to(starRef.current,{
          motionPath: {
            path: "#path2",    //"M223.762 122.992h10.186q9.433 0 9.433 6.699 0 4.512-3.349 7.076-3.35 2.563-9.297 2.563h-13.399l-5.058 12.578q-8.272 20.85-17.295 29.429-9.023 8.579-22.49 8.579-12.715 0-21.226-8.477-8.511-8.476-8.511-21.123 0-9.502 4.991-17.534 4.99-8.032 14.15-13.159 11.621-6.494 32.061-6.494l10.8-.137 15.928-39.648q4.102-10.323 4.102-14.082 0-3.213-2.871-5.572-2.872-2.358-6.836-2.358-6.631 0-12.066 6.016-5.434 6.015-5.434 13.33 0 3.965 1.88 6.323 1.879 2.358 6.528 4.136 4.922 1.982 4.922 6.289 0 3.896-2.94 6.494-2.939 2.598-7.314 2.598-8.682 0-14.8-7.212t-6.118-17.466q0-14.971 11.211-26.079 11.211-11.109 26.318-11.109 11.074 0 18.491 6.665t7.417 16.714q0 6.358-3.554 15.313zm-25.088 16.338q-14.355 0-22.011 2.734-7.11 2.53-11.211 7.281-4.102 4.751-4.102 10.493 0 5.332 3.486 9.023 3.487 3.692 8.477 3.692 6.357 0 11.45-5.572 5.093-5.571 10.015-17.876z",
            align: "#path2",
            alignOrigin: [0.3, 0.3],
            autoRotate: true
        },
        transformOrigin: "50% 50%",
        duration: 5,
        ease: "power2.inOut",
        delay: 5
        })
     }
    */
    return ( 
        <>
         
         <section>
             <div className="text-container">
             <span className={`${letterClass} _3`}>H</span>
             <span className={`${letterClass} _4`} style={{paddingRight:"0.2em"}}>i</span> 
             <AnimatedLetters
             letterClass={letterClass}
             strArray={"there!".split("")}
             index={5}
             id="animLetters"
             />
             <br/>
             <span className={`${letterClass} _10`}>I</span> 
             <span className={`${letterClass} _11`} style={{paddingRight:"0.2em"}}>'m</span> 
             <AnimatedLetters
             letterClass={letterClass}
             strArray={nameArray}
             index={12}
             id="animLetters"
             />
           
             <br />
             <span className={`${letterClass} _17`} style={{paddingRight:"0.2em"}}>a</span> 
             <AnimatedLetters
             letterClass={letterClass}
             strArray={"web".split()}
             index={18}
             />
             <span> </span>
             <AnimatedLetters
             letterClass={letterClass}
             strArray={ jobArray}
             index={21}
             />
             <br/>
            <span className="pre-text">FULL-STACK DEVELOPER / IOT DEVELOPER</span>
           </div>
         </section>
         
         <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsBx="https://boxy-svg.com"
      viewBox="0 0 500 500"
      className="logo-img" 
      ref={logoRef}
      
    >
      <defs>
        <filter
          id="drop-shadow-filter-0"
          width="1000%"
          height="1000%"
          x="-500%"
          y="-500%"
          bxPreset="drop-shadow 1 11 12 0 0.5 rgba(168,235,15,1)"
        >
          <feGaussianBlur in="SourceAlpha"></feGaussianBlur>
          <feOffset dx="11" dy="12"></feOffset>
          <feComponentTransfer result="offsetblur">
            <feFuncA slope="1" type="linear"></feFuncA>
          </feComponentTransfer>
          <feFlood floodColor="rgba(20,71,103,1)"></feFlood>
          <feComposite in2="offsetblur" operator="in"></feComposite>
          <feMerge>
            <feMergeNode></feMergeNode>
            <feMergeNode in="SourceGraphic"></feMergeNode>
          </feMerge>
        </filter>
      </defs>
      <path
        d="M223.762 122.992h10.186q9.433 0 9.433 6.699 0 4.512-3.349 7.076-3.35 2.563-9.297 2.563h-13.399l-5.058 12.578q-8.272 20.85-17.295 29.429-9.023 8.579-22.49 8.579-12.715 0-21.226-8.477-8.511-8.476-8.511-21.123 0-9.502 4.991-17.534 4.99-8.032 14.15-13.159 11.621-6.494 32.061-6.494l10.8-.137 15.928-39.648q4.102-10.323 4.102-14.082 0-3.213-2.871-5.572-2.872-2.358-6.836-2.358-6.631 0-12.066 6.016-5.434 6.015-5.434 13.33 0 3.965 1.88 6.323 1.879 2.358 6.528 4.136 4.922 1.982 4.922 6.289 0 3.896-2.94 6.494-2.939 2.598-7.314 2.598-8.682 0-14.8-7.212t-6.118-17.466q0-14.971 11.211-26.079 11.211-11.109 26.318-11.109 11.074 0 18.491 6.665t7.417 16.714q0 6.358-3.554 15.313zm-25.088 16.338q-14.355 0-22.011 2.734-7.11 2.53-11.211 7.281-4.102 4.751-4.102 10.493 0 5.332 3.486 9.023 3.487 3.692 8.477 3.692 6.357 0 11.45-5.572 5.093-5.571 10.015-17.876z"
        transform="rotate(.999 192.904 105.523)"
        id="path2"
        fill="#11B408"
        stroke="rgba(187, 218, 85, 0.46)"
        strokeWidth="0.5"
        filter="url(#drop-shadow-filter-0)"
        paintOrder="fill"
      ></path>
    </svg>
  
         <img src={Star} className="star-img" ref={starRef} alt=""/>
          <div id="bg-container">
                <Background  />
          </div>
          
           
        </>
     );
}
 
export default Home;