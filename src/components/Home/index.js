import { Link } from "react-router-dom";
import './index.scss';
import { useState, useEffect } from "react";
import AnimatedLetters from "../AnimatedLetters";
import ClockLoader from 'react-spinners/ClockLoader';
import React from 'react';
import GifAnimation from '/home/diogo/react-portfolio/src/videos/gifcity.mp4';




const Home = () => {
    const  [loading, setLoading] = useState(true)

    useEffect(() => {
      setTimeout(() => {
        setLoading(false)
      }, 1300)
    }, [])

    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArr = [' ', 'D', 'i', 'o', 'g', 'o', '.'];
    const jobArr = ['F', 'r', 'o', 'n', 't', '-', 'e', 'n', 'd', ' ', 'D', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r',];

     useEffect(() => {
        setTimeout(() => {
        return setLetterClass('text-animate-hover')
        }, 5000)
      }, []);


    return (

        <>
        
        <div className="container home-page">
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
                <span className={`${letterClass} _11`}>H</span>
                <span className={`${letterClass} _12`}>i</span>
                <span className={`${letterClass} _13`}>,</span>

                <br />
                <span className={`${letterClass} _14`}>I</span>
                <span className={`${letterClass} _15`}>'</span>
                <span className={`${letterClass} _16`}>m</span>

                <AnimatedLetters letterClass={letterClass}
                strArray={nameArr}
                index={17} />
                <br />
                <div className="linebreak"></div>
                <AnimatedLetters letterClass={letterClass}
                strArray={jobArr}
                index={28} />                
                </h1>
                <div> 
                <Link to="/contact" className='contact-button'>
                    CONTACT ME
                </Link>
                <a href= "/Diogo_Merelles_CV.pdf" className="cv-button" target="_blank" rel="noreferrer" download>
                    DOWNLOAD MY CV
                </a>
                </div>
                <div className="gif-animation">
                <video src={GifAnimation} autoPlay="true" loop="true" height="850px" width="700px"/>
                </div>
            </div>
            }
        </div>
        </>

    );

}





export default Home;