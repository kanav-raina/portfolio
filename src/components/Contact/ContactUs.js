import { TextField } from '@material-ui/core'
import React from 'react'
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import GitHubIcon from '@material-ui/icons/GitHub';
import MailIcon from '@material-ui/icons/Mail';
import CallIcon from '@material-ui/icons/Call';
import '../style.css'
const ContactUs = () => {
    return (
        <div>
            <div className='heading'>
                <h1>ContactUs</h1>
            </div>
            <div className='contact'>
                <form className='contact-form' noValidate autoComplete="off">
                    <div className='input-item'>
                        <TextField id="outlined-basic" label="Name" variant="outlined" fullWidth />
                    </div>
                    <div className='input-item'>
                        <TextField id="outlined-basic" label="Email" variant="outlined" fullWidth />
                    </div>
                    <div className='input-item'>
                        <TextField id="outlined-basic" label="ContactNo" variant="outlined" fullWidth />
                    </div>
                    <div className='input-item'>
                        <TextField id="outlined-basic" rows={2} label="Message" variant="outlined" fullWidth />
                    </div>
                    <button>Send</button>
                </form>
                <div className='social-network'>
                    <div className='callnmail'> 
                        <div className='call'>
                            <CallIcon />
                        </div>
                        <div>
                            <div>Call:</div>
                            <div>+91-8492809554</div>
                        </div>
                    </div>
                    <div className='callnmail'> 
                        <div className='call'>
                            <MailIcon />
                        </div>
                        <div>
                            <div>Mail:</div>
                            <div>kanavraina98@gmail.com</div>
                        </div>
                    </div>
                    <div>
                        <div style={{textAlign:'center'}}>
                            <h2>Get in Touch!</h2>
                        </div>
                        <div className='social-network-logo'>
                            <FacebookIcon style={{marginLeft:'2rem', height:'60px', width:'30px'}} />
                            <LinkedInIcon style={{marginLeft:'2em', height:'60px', width:'30px'}} />
                            <TwitterIcon style={{marginLeft:'2rem', height:'60px', width:'30px'}} />
                            <InstagramIcon style={{marginLeft:'2rem', height:'60px', width:'30px'}} />
                            <GitHubIcon style={{marginLeft:'2rem', height:'60px', width:'30px'}} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactUs
