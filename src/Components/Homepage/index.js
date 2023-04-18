import './index.scss';
import LogoTitle from '../../assets/images/logo-s.png'
import {Link} from 'react-router-dom';
import { useState,useEffect } from 'react';
import AnimatedLetters from '../AnimaterLetters';
import Logo from './Logo';
const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = ['d','a','r','s','h']
    const jobArray = ['w','e','b',' ','d','e','v','e','l','o','p','e','r',' ','&',' ','d','a','t','a',' ','a','n','a','l','y','s','t']

    useEffect(() => {
        return setTimeout(() => {
          setLetterClass('text-animate-hover')
        }, 4000)
      }, [])

    return (
    <div className="container home-page">
        <div className='text-zone'>
            <h1>
            <span className ={letterClass}>H</span>
            <span className={`${letterClass}_10`}>i</span>
            <br/>
            <span className={`${letterClass}_11`}>I</span>
            <span className={`${letterClass}_12`}>'m</span>
            <img src = {LogoTitle} alt="developer"/>
            <AnimatedLetters letterClass={letterClass}
            strArray = {nameArray}
            idx ={13}
            />
            <br/>
            <AnimatedLetters letterClass={letterClass}
            strArray = {jobArray}
            idx ={18}
            />
            </h1>
            <h2>Full Stack Developer /JavaScript / Machine Learner / Data Analyst</h2>
            <Link to="/contact" className='flat-button'>Contact Me</Link>            
        </div>
        <Logo/>
    </div>
    );
}
export default Home;