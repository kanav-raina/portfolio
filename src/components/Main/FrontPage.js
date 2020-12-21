import { Button } from '@material-ui/core'
import React from 'react'

const FrontPage = () => {
    return (
        <div>
            <div className='front-page' data-aos="fade-in">
                <div className='left-side'>
                        <div className='content'>
                                Hello there<br />
                                I'm KANAV RAINA<br />
                                <Button color='primary' variant='contained'>Get in Touch</Button>
                        </div>
                </div>
                <div className='right-side'>
                        <img src='https://avatars3.githubusercontent.com/u/29794748' />
                </div>
            </div>
        </div>
    )
}

export default FrontPage
