import './index.scss'
import AnimatedLetters from '../../util/AnimatedLetters/AnimatedLetters'
import React, { useState, useEffect} from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const [letterClass, setLetterClass] = useState("text-animate")  
    const [data, setData] = useState({
      name: "",
      email: "",
      subject: "",
      message: "",
    })
    useEffect(() => {
        setTimeout(() => {
        setLetterClass("text-animate-hover")
       },4000)
     },[])
     
     function onSubmit(event) {
      event.preventDefault()
      
      emailjs.init(process.env.REACT_APP_PUBLIC_KEY);
      emailjs.send( process.env.REACT_APP_SERVICE_ID,  process.env.REACT_APP_TEMPLATE_ID, data)
      .then((result) => {
        console.log('SUCCESS');
    }, (error) => {
        console.log(error);
    });
    setData({
      name: "",
      email: "",
      subject: "",
      message: "",
    })
    var el = document.querySelector(".btn-text")
    el.innerHTML = "";
    el.innerHTML = "SENT"
     }
     function onChange(e){
      setData({...data, [e.target.name]:e.target.value})
      
     }
    return (
        <div className='contact-page'>
            <section>
                <h1 className="header">
                <AnimatedLetters
                  strArray={["C",'O','N','T','A','C','T']}
                  letterClass={letterClass}
                  index={5}
                  style={{paddingRight:"0.2em"}}
                />
                <span>  </span>
                <AnimatedLetters
                strArray={['M','E']}
                letterClass={letterClass}
                index={14}
                /></h1>
              
                <p>
                  I am interested in freelance/job opportunities. If you have any queries,
                   please send a message below and I will get back to you.
                </p>
                <form onSubmit={onSubmit}>
                <input
                type="text"
                name='name'
                placeholder="Name"
                onChange={onChange}
                required
                />
                 <input
                type="email"
                name='email'
                placeholder="Email"
                onChange={onChange}
                required
                />
                 <input
                type="text"
                name='subject'
                placeholder="Subject"
                onChange={onChange}
                required
                />
                <textarea
                name="message"
                placeholder="Message"
                onChange={onChange}
                required
                ></textarea>
                <button type="submit"   className="form-button"><span className="btn-text">SUBMIT</span></button>
            </form>
            </section>
           
        </div>
      );
}
 
export default Contact;