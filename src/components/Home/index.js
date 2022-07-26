import { Link } from "react-router-dom";
import './index.scss';
import { useState, useEffect } from "react";
import AnimatedLetters from "../AnimatedLetters";

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArr = [' ', 'D', 'i', 'o', 'g', 'o', '.'];
    const jobArr = ['F', 'r', 'o', 'n', 't', '-', 'e', 'n', 'd', ' ', 'D', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r',];

     useEffect(() => {
        setTimeout(() => {
        return setLetterClass('text-animate-hover')
        }, 4000)
      }, [])

      

    return (

        <>
        <div className="container home-page">
            <div className="text-zone">
                <h1>
                <span className={letterClass}>H</span>
                <span className={`${letterClass} _12`}>i,</span>
                <br />
                <span className={`${letterClass} _13`}>I</span>
                <span className={`${letterClass} _14`}>'m</span>

                <AnimatedLetters letterClass={letterClass}
                strArray={nameArr}
                index={15} />
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
                </div>
            
            </div>
        </div>
        </>

    );

}





export default Home;