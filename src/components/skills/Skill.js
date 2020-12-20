import React from 'react'
import '../style.css'
const Skill = () => {
    return (//fix this margin error skill is overlapping on grid if margin is not set
        <div style={{marginTop:'40rem'}}>    
            <div className='heading'>
                <h1>Skills</h1>
            </div>
            <div className='skills'>
                <div>JavaScript : 75%</div>
                <div>Python :70%</div>
                <div>ReactJS :80%</div>
                <div>HTML and CSS :70%</div>
                <div>Node:65%</div>
                <div>IOT and Raspberrypi :80%</div>
                <div>Linux Shell Scripting :55%</div>
                <div>GraphQl and Mongodb :</div>
            </div>
        </div>
    )
}







export default Skill
