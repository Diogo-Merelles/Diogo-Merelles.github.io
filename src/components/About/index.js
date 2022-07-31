import './index.scss'
import AnimatedLetters from '../AnimatedLetters';
import Sidebar from '../Sidebar';


const About = () => {
    return (

        <div className='container about-page'>
        <div className="About">
        <Sidebar />
        <div className="page">
            <span className="tags top-tags-html">&lt;html&gt;</span>
            <br />
            <span className="tags top-tags">&lt;body&gt;</span>
            <span className="tags bottom-tags">
                &lt;/body&gt;
                <br />
                <span className="bottom-tag-html">&lt;/html&gt;</span>
            </span>

        </div>

        </div>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters 
                        strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
                        index={15}
                    />
                </h1>
                <p>Oh, hello there!</p>
                <p>
                    In the 26 years I've spent on this planet, I had a lot of dreams and goals. I mean, who never thought about becoming a football player or a lawyer, right...?  
                </p>
                <p>
                    In my case, and after much consideration, I decided to become a marketeer. I have always enjoyed finding new methods and strategies to accomplish a goal and nothing made me more satisfied than achieving said goal, it was so rewarding.
                </p>
                <p>
                    That's why Marketing was so appealing to me at the time, a brand has a problem or a goal they want to achieve, and I had to find a way to solve it (Surprisingly sounds a lot similar to coding, who would have guessed?).
                </p>
                <p>
                    Nevertheless, at the end of the day I wasn't fulfilled and I felt stagnated. And that's when I found out about the wonderful world of coding and web development. A simple console.log() or a for loop made me unbelievably happy! It simply lighted a passion in me.
                </p>
                <p>
                    Knowing this, it was a no-brainer to focus on front-end development, it joins the problem solving aspect of coding and the creativity aspect it needs. The best of both worlds.
                </p>
                <p>
                    As I've never felt such motivation to pursue and dedicate myself 110% to web development, I try to learn everyday. These are the tools I've learned so far and try to learn in an even deeper way: HTML, CSS, JavaScript, Java, Bootstrap, Git, MySQL, React, TypeScript and SASS.  
                </p>
                <p>
                    If you've read this far and are interested in what I have to offer, feel free to contact me!
                </p>
            </div>
        </div>
        
        
        
    )

}


export default About;