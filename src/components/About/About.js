import React from 'react'
import '../style.css'
import programmer from '../images/programmer.gif'
//http://gifgifs.com/animations/jobs-people/computer-programmers/programmer_2.gif
const About = () => {
    return (
        <div id="about">
            <div className='heading'>
                <h1>About Me</h1>
            </div>
            
            <div className='about' data-aos="fade-in">
                <div className='left'>
                    <img className="black_image" src='https://avatars3.githubusercontent.com/u/29794748' />
                </div>
                <div className='right' >
                    <p>
                        <img src={programmer} />
                     <b>
                         Hi there! I am <span id='name'>Kanav Raina</span>. I am a Computer Science Engineer with a deep interest
                        in CyberSecurity and Open Source. I have been trying to learn security, front-end
                        and backend development from last 3 years and would continue this throughout the 
                        lifetime.Over the years I am learning from various Blogs, research papers, reports
                        and youtube channels.I like to spent my time trying to contribute to open source 
                        and find bugs in various bug bounty programs. I have also tried to write some tools
                        with python and developed some cool projects using ReactJS, you can check it in my
                        projects.
                     </b>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default About
