import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
import LogoS from '../../images/logo-s.png'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const aboutArr = ['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']

  useEffect(() => {
    setTimeout(() => {
      return setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={aboutArr}
              index={15}
            />
          </h1>
          <p>Hi!</p>
          <p>
            Welcome, my name is Diogo and I'm a aspiring front-end developer,
            searching for a opportunity to challenge myself professionally,
            working with the latest technologies and writing clean code.
          </p>
          <p>
            Coming from a background in Communication and Marketing, I've always
            been interested in Tech. Finally deciding to pursue this challenge,
            I enrolled in programming Boot-camp.
          </p>
          <p>
            That's when I found out about the wonderful world of coding and web
            development. A simple console.log() or a for loop made me
            unbelievably happy! It simply lighted a passion in me.
          </p>
          <p>
            Being a very visual and creative type of person, it was a no-brainer
            to choose front-end development as my path, since it combines the
            technical side of solving problems, with the creative side,
            necessary for the UX/UI.
          </p>
          <p>
            As I've never felt such motivation to pursue and dedicate myself
            110% to web development, I try to learn everyday. These are the
            tools I've learned so far and try to learn in an even deeper way:
            HTML, CSS, JavaScript, Java, Bootstrap, Git, MySQL, React,
            TypeScript and SASS.
          </p>
          <p>
            If you've read this far and are interested in what I have to offer,
            feel free to contact me!
          </p>
        </div>
        <div>
          <Link to="/contact" className="contact-button">
            CONTACT ME
          </Link>
          <a
            href="/Diogo_Merelles_CV.pdf"
            className="cv-button"
            target="_blank"
            rel="noreferrer"
            download
          >
            DOWNLOAD MY CV
          </a>
          <div className="stage-cube-content">
            <div className="cubespinner">
              <div className="face-1">
                <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
              </div>
              <div className="face-2">
                <FontAwesomeIcon icon={faHtml5} color="#F06529" />
              </div>
              <div className="face-3">
                <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
              </div>
              <div className="face-4">
                <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
              </div>
              <div className="face-5">
                <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
              </div>
              <div className="face-6">
                <img src={LogoS} alt="home-logo" width="10" height="10" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default About
