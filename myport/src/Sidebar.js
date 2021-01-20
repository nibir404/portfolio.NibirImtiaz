import React from 'react'
import img1 from '../src/Images/1.png'
import HomeIcon from '@material-ui/icons/Home';
import PersonIcon from '@material-ui/icons/Person';
import GroupWorkIcon from '@material-ui/icons/GroupWork';
import TelegramIcon from '@material-ui/icons/Telegram';
import { NavLink } from 'react-router-dom';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';

function Sidebar() {
    return (
        <div className="Main_sidebar">
        <div className='wrapper'>
             <div className="sidebar">
                    <img src={img1} alt="" width='70px' className='rounded-circle mt-3 pd-4 shadow-sm bg-light' />
                    <h3 className='info_text'>Web Developer</h3>
                    
                    <ul>
                        <NavLink to='/' className='link'><li className='icons'><HomeIcon /> HOME</li></NavLink>
                        <NavLink to='/about' className='link'><li className='icons'><PersonIcon/> ABOUT</li></NavLink>
                        <NavLink to='/service' className='link'><li className='icons'><GroupWorkIcon /> SERVICE</li></NavLink>
                        <NavLink to='/contact' className='link'><li className='icons'><TelegramIcon /> CONTACT</li></NavLink>
                    </ul>

                    <h5 className='follow'>FOLLOW ME</h5>
                    <div className='Social_media'>
                            <NavLink to='#'><FacebookIcon/></NavLink>
                            <NavLink to='#'><TwitterIcon/></NavLink>
                            <NavLink to='#'><InstagramIcon/></NavLink>
                            <NavLink to='#'><LinkedInIcon/></NavLink>
                            <NavLink to='#'><GitHubIcon/></NavLink>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sidebar;
