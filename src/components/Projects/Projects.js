import React from 'react'
import '../style.css';
import Card_Item from './Card-Item';


const Projects = () => {
    const arr=[1,2,3,4,5,6]
    return (
        <div className='project-page'>
            <div className='heading'>
                <h1>Projects</h1>
                <div className='projects' data-aos="fade-in">
                    {arr.map((a)=>{
                        return(
                            <div key={a} className='card'>
                                <Card_Item />
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Projects
