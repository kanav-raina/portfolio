import React from 'react'
import '../style.css';
import Card_Item from './Card-Item';
import {projects} from './projects'



const Projects = () => {
    return (
        <div id="projects" className='project-page' data-aos="fade-up">
            <div className='heading'>
                <h1 style={{marginBottom:'3rem'}}>Projects</h1>
                <div className='projects' data-aos="fade-in">
                    {projects.map((project)=>{
                        return(
                            <div key={project.id} className='card'>
                                <Card_Item project={project} />
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Projects
