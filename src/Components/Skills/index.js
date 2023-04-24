import './index.scss';
import AnimatedLetters from '../AnimaterLetters';
import { useState } from 'react';
import { useEffect } from 'react';
const Skills = () =>{
    const [letterClass, setLetterClass] = useState('text-animate')
    useEffect(() => {
      return setTimeout(() => {
        setLetterClass('text-animate-hover')
      }, 3000)
    }, [])
    return(
        <>
        <div className="container skill-page">
            <div className="text-zone">
            <h1>
                <AnimatedLetters
                letterClass = {letterClass}
                strArray ={['S','k','i','l','l','s']}
                idx ={15}
                />
            </h1>
            <p>
                Expert in Programing Languages & Development technologies like,
            <span className="tech-tag">C++</span>,
            <span className="tech-tag">Python</span>,
            <span className="tech-tag">JavaScipt</span>,
            <span class="tech-tag">HTML5</span>,
            <span class="tech-tag">React</span>,
            <span class="tech-tag">Git</span>,
            <span class="tech-tag">Machine Learning</span>
            , etc.
            </p> 
            <p>
            I’m not a designer but I have a good sense of aesthetics, and
            experience in responsive, mobile-first web design. I put special
            effort into optimizing my code and providing the best user
            experience. I would love to give you any kind of support also after
            the project's completion. I guarantee a commitment during work on
            your project.
            </p>
            <p>     
            Visit my
            <a onclick="ga('send', {'hitType': 'event', 'eventCategory': 'Skills Page', 'eventAction': 'Link Clicked', 'eventLabel': 'Linkedin profile' });" target="_blank" href="https://www.linkedin.com/in/adarsh-gupta-9708b4206/"> LinkedIn </a>
            profile for more details. Also you can checkout my cv on this
            <a target="_blank" href="https://github.com/ADARSHgupta114/Resume/blob/main/adarshgupta.pdf"> link .</a>
            </p>
            </div>
        </div>
        </>
    )
}
export default Skills;
