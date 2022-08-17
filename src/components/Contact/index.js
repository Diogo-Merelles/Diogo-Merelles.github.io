import './index.scss'
import ClockLoader from "react-spinners/ClockLoader";
import { useState, useEffect } from 'react';
import AnimatedLetters from '../AnimatedLetters'
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import ContactImage from '/home/diogo/react-portfolio/src/images/Software-Developer.svg'



const Contact = () => {

  const form = useRef();
  
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_worpqob', 'template_r5t84q4', form.current, 'KIuwXvxxzjjSrEDnn')
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    })
    .then(
      () => {
        alert('Message successfully sent!')
        window.location.reload(false);
      },
      () => {
        alert('Failed to send message, please try again')
      }
    );
};

  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    setTimeout(() => {
      return setLetterClass('text-animate-hover')
    }, 5000)
  }, []);

    //const strAniLetters = ['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']
    const strAniLetters = 'Contact me'.split('')

    const  [loading, setLoading] = useState(true)

    useEffect(() => {
      setTimeout(() => {
        setLoading(false)
      }, 1300)
    }, [])


    return (
        <>
            <div className="container contact-page">
            {
                loading ?

                <div className="loader">
                <ClockLoader
                size={150}
                color={"#ffd700"}
                loading={loading}
                speedMultiplier={1.5}
                
              /> 
              </div>

              :

              <div className="text-zone">
                <h1>
                <AnimatedLetters 
                  letterClass={letterClass}
                  strArray={strAniLetters} 
                  index={15}
                />
                </h1>
                <p>
                  If you wish to contact me, feel free to download my CV, whre you can find my email account.
                  You can also use the form just below and I will get to you <strong>A.S.A.P.!</strong>
                </p>
                <div className="contact-form">
                  <form ref={form} onSubmit={sendEmail}>
                    <ul>
                      <li className="half-row">
                        <input type="text" name="name" placeholder="Name" required />
                      </li>
                      <li className="half-row">
                        <input type="email" name="email" placeholder="Email" required />
                      </li>
                      <li >
                        <input type="text" name="subject" placeholder="Subject" required />
                      </li>
                      <li>
                        <textarea type="text" name="message" placeholder="Message" required >
                        </textarea>
                      </li>
                      <li >
                        <input type="submit" className="submit-button" value="Send" required />
                      </li>
                    </ul>
                  </form>
                </div>
                <a
                  href="/Diogo_Merelles_CV.pdf"
                  className="cv-button"
                  target="_blank"
                  rel="noreferrer"
                  download
                  >DOWNLOAD MY CV</a>
              </div>
            }
              <img className="contact-image" src={ContactImage} alt="Developer"/>

            </div>
        </>
    )
}

export default Contact