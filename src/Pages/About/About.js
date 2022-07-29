import React, { useState,useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faReact,faCss3,faNode,faLinux} from '@fortawesome/free-brands-svg-icons'
import {faDatabase} from '@fortawesome/free-solid-svg-icons'
import AnimatedLetters from '../../util/AnimatedLetters/AnimatedLetters'
import './index.scss'

const About = () => {
    const [letterClass, setLetterClass] = useState("text-animate")
     
    useEffect(() => {
        setTimeout(() => {
        setLetterClass("text-animate-hover")
       },4000)
     },[])
    return ( 
        <div className="about-container">
        <section>
            <h1 className="header">
                <AnimatedLetters
                strArray={"ABOUT ME".split("")}
                letterClass={letterClass}
                index={5}
                />
            </h1>
            <p>
                I am a passionate software developer with a background in electronics and IOT. I begun self-learning web development after campus as it had always been my dream to become a web developer ever since I discovered coding. I am a voracious learner 
                incessantly seeking to grow my skills in programming. I am adept at creating visually-intriguing web designs with various awesome tools and technologies. 

            </p>
            <p>
                I help businesses upscale in the digital world by building intuitive attractive web apps for their products and services. I am a voracious problem-solver even with the most difficult challenges , always believing 
                 there is a way. I work tirelessly and meticulously to always deliver the best and desirable products to clients.
            </p>
            <p>
                I am open-minded and easily approachable. I am open to discussing different approaches and arriving at the optimum solution that is best for the client.
                I work well with others and don't mind group projects.
            </p>
            <h2>MY SKILLS</h2>
            <div className="card-container">
        
            <div className='card _1'>
                <FontAwesomeIcon icon={faReact} size='3x' color="#1E90FF"/>
                <div className='card-back'><ul><li>React</li><li>Redux</li></ul></div>
            </div>
            <div className='card _2'>
                <FontAwesomeIcon icon={faDatabase} size='3x' color="#008000" />
                <div className='card-back'><ul><li>MongoDB</li></ul></div>
            </div>
            <div className='card _3'>
                <FontAwesomeIcon icon={faCss3} size='3x' color="#0000FF"/>
                <div className='card-back'><ul><li>CSS3</li><li>Sass</li></ul></div>
            </div>
            <div className='card _4'>
                <FontAwesomeIcon icon={faNode} size='3x' color="#FFD700"/>
                <div className='card-back'><ul><li>Nodejs</li><li>Express</li><li>GraphQl</li></ul></div>
            </div>
            <div className='card _5'>
                <FontAwesomeIcon icon={faLinux} size='3x' color="#000000"/>
                <div className='card-back'><ul><li>Linux</li></ul></div>
            </div>
        </div>
        </section>
        
        
        
        
       
        </div>
        
     );
}
 
export default About;