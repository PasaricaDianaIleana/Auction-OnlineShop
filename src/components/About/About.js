import React from 'react';
import Index from '../Header/Index';
import bgImg from '../../Images/bgImg.webp'
const About = () => {


    return (
        <div>
            <Index bgImg={bgImg} text="Explore" title="About us" show={true} />
        </div>
    )
}
export default About;