import { Link } from "react-router-dom";
import './index.scss';
import { useState, useEffect } from "react";
import AnimatedLetters from "../AnimatedLetters";
import Spline from '@splinetool/react-spline';
import ClockLoader from "react-spinners/ClockLoader";




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
                <span className={letterClass}>H</span>
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
                <div className="home-animation">
                <Spline scene="https://prod.spline.design/fBEI7yvGRLm8D7rd/scene.splinecode" />
                </div>
            </div>
            }
        </div>
        </>

    );

}





export default Home;