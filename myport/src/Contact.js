import React from 'react'
import './Contact.css'
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';


function Contact() {
    return (
        <section id='contact'>
             <div  className="page-content p-5" id='content'>
                <h2 className='display-4 text-white about_head'>CONTACT</h2>
                <div className="container py-5">
                    <div className="row">
                <div className='wrapper'>
                    <div className="button">
                        <div className="icon"><FacebookIcon /></div>
                        <span className='text-light cont-text'>Facebook</span>
                    </div>
                    <div className="button">
                    <div className="icon"><TwitterIcon /></div>
                        <span className='text-light cont-text'>Twitter</span>
                    </div>
                    <div className="button">
                    <div className="icon"><InstagramIcon /></div>
                        <span className='text-light cont-text'>Instagram</span>
                    </div>
                    <div className="button">
                    <div className="icon"><GitHubIcon /></div>
                        <span className='text-light cont-text'>GitHub</span>
                    </div>
                    <div className="button">
                    <div className="icon"><LinkedInIcon /></div>
                        <span className='text-light cont-text'>LinkedIn</span>
                    </div>
                        </div>
                </div>
                </div>
                </div>
        </section>
    )
}

export default Contact
