import { Button } from '@material-ui/core'
import React from 'react'
import { Link } from 'react-router-dom'

const FrontPage = () => {
    return (
        <div>
            <div className='front-page' data-aos="fade-in">
                <div className='left-side'>
                        <div className='content'>
                                Hello there<br />
                                I'm KANAV RAINA<br />
                                <Button color='primary' variant='contained'><a style={{textDecoration:'none', color:"white"}} href="#contact-us">Get in Touch</a></Button>
                        </div>
                </div>
                <div className='right-side'>
                        <img src='https://kanav-raina.surge.sh/static/media/kanav.84b81489.png' />
                </div>
            </div>
        </div>
    )
}

export default FrontPage
