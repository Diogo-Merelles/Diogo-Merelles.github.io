import './index.scss'
import {useEffect, useState} from 'react'
import ClockLoader from "react-spinners/ClockLoader";
import AnimatedLetters from '../AnimatedLetters'
import Trivia from '/home/diogo/react-portfolio/src/images/trivia.jpg'
import Cupid from '/home/diogo/react-portfolio/src/images/cupid.jpg'
import Javabank from '/home/diogo/react-portfolio/src/images/javabank.jpg'
import Sokoban from '/home/diogo/react-portfolio/src/images/sokoban.png'


const Showcase = () => {


    const  [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 1300)
  }, [])


  useEffect(() => {
    setTimeout(() => {
      return setLetterClass('text-animate-hover')
    }, 5000)
  }, []);

    const PortfolioPageTitle = 'Portfolio'
    const strAniLetters = PortfolioPageTitle.split('')

    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
      setTimeout(() => {
        return setLetterClass('text-animate-hover')
      }, 5000)
    }, []);



    return(

        <>

        <div className="container showcase-page">
        
        
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
            <div className="showcase-text-zone">
                <h1>
                <AnimatedLetters 
                  letterClass={letterClass}
                  strArray={strAniLetters} 
                  index={15}
                />
                </h1>
                <div className="images-list">
                  <div className="project">
                  <a href="https://github.com/Diogo-Merelles/CheeseMaster" target="_blank" rel="noreferrer">
                    <img src={Trivia} height="250px" width="250px" alt="project" />
                  </a>
                  </div>
                  <div className="project">
                  <a target="_blank" href="https://github.com/Diogo-Merelles/Z-Cupid" rel="noreferrer">
                    <img src={Cupid} height="250px" width="250px" alt="project"/>
                  </a> 
                  </div>
                  <div className="project">
                  <a target="_blank" href="https://github.com/Diogo-Merelles/minibank" rel="noreferrer">
                    <img src={Javabank} height="250px" width="250px" alt="project"/>
                  </a>
                  </div>
                  <div className="project">
                  <a target="_blank" href="https://github.com/Diogo-Merelles/Sokoban-VideoGame" rel="noreferrer">
                    <img src={Sokoban} height="250px" width="250px" alt="project"/>
                  </a>
                  </div>
                </div>
            </div>  
           
        }

        </div>
        </>
    )
}

export default Showcase;