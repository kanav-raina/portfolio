import React from 'react'
import '../style.css'
const About = () => {
    return (
        <div>
            <div className='heading'>
                <h1>About Me</h1>
            </div>
            <div className='about'>
                <div className='left'>
                    <img src='https://avatars3.githubusercontent.com/u/29794748' />
                </div>
                <div className='right'>
                    <p>

                    Hi there! I am Kanav Raina. I am a Computer Science Engineer with a deep interest
                    in CyberSecurity and Open Source. I have been trying to learn security, front-end
                    and backend development from last 3 years and would continue this throughout the 
                    lifetime.Over the years I am learning from various Blogs, research papers, reports
                    and youtube channels.I like to spent my time trying to contribute to open source 
                    and find bugs in various bug bounty programs. I have also tried to write some tools
                    with python and developed some cool projects using ReactJS, you can check it in my
                     projects.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default About
