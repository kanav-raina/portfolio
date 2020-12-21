import React from 'react';
import '../style.css';
import LinearWithValueLabel from './Progress';

const Skill = () => {
    return (
        <div>    
            <div className='heading'>
                <h1>Skills</h1>
            </div>
            <div className='skills' data-aos="fade-up">
                    <div className='progress' >
                        <div className='skill'>
                            JavaScript :
                        </div>  
                        <LinearWithValueLabel value={75}  />
                    </div>
                    <div className='progress'>
                        <div className='skill'>
                            Python :
                        </div>  
                        <LinearWithValueLabel value={70}  />
                    </div>
                    <div className='progress'>
                    <div className='skill'>
                        ReactJS :
                     </div> 
                        <LinearWithValueLabel value={90}  />
                    </div>
                    <div className='progress'>
                        <div className='skill'>
                            HTML and CSS :
                        </div> 
                        <LinearWithValueLabel value={75}  />
                    </div>
                    <div className='progress'>
                        <div className='skill'>
                            Node :
                        </div> 
                        <LinearWithValueLabel value={75}  />
                    </div>
                    <div className='progress'>
                        <div className='skill'>
                            IOT and Raspberrypi :
                        </div> 
                        <LinearWithValueLabel value={80}  />
                    </div>
                    <div className='progress'>
                        <div className='skill'>
                            Linux Shell Scripting :
                        </div> 
                        <LinearWithValueLabel value={75}  />
                    </div>
                    <div className='progress'>
                        <div className='skill'>
                            GraphQl and Mongodb 
                        </div> 
                        <LinearWithValueLabel value={75}  />
                    </div>

            </div>
        </div>
    )
}

export default Skill
