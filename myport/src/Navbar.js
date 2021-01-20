import React from 'react'
import './Navbar.css'
import { Link } from 'react-scroll'
import DehazeIcon from '@material-ui/icons/Dehaze';
import img1 from '../src/Images/1.png'
import $ from 'jquery'

function Navbar() { 

    const Responsive = () => {
        $('#sidebarCollapse').on('click', function () {
            $('#sidebar, #content').toggleClass('active');
        })
    }

    return (
        <div className='navbar_main'>
            <div className="vertical-nav bg-white" id='sidebar'>
                <div className="py-4 px-3 mb-4 bg-light">
                    <div className="media d-flex alighn-item-center">
                        <Link to='/about'><img src={img1} alt="" width='70px' /></Link>
                    </div>
                    <div className="media-body">
                        <h4 className="m-0">NIBIR IMTIAZ</h4>
                        <p className="font-weight-normal text-muted mb-0">Web Developer</p>
                    </div>
                </div>
                <ul className="nav flex-column bg-light mb-0">
                    <li className='nav-item'><Link smooth={true} duration={1000} to='about' className='nav-link text-dark'>ABOUT</Link></li>
                    <li className='nav-item'><Link smooth={true} duration={1000} to='education' className='nav-link text-dark'>EDUCATION</Link></li>
                    <li className='nav-item'><Link smooth={true} duration={1000} to='experience' className='nav-link text-dark'>EXPERIENCE</Link></li>
                    <li className='nav-item'><Link smooth={true} duration={1000} to='skills' className='nav-link text-dark'>SKILLS</Link></li>
                    <li className='nav-item'><Link smooth={true} duration={1000} to='gallery' className='nav-link text-dark'>GALLERY</Link></li>
                    <li className='nav-item'><Link smooth={true} duration={1000} to='service' className='nav-link text-dark'>SERVICE</Link></li>
                    <li className='nav-item'><Link smooth={true} duration={1000} to='contact' className='nav-link text-dark'>CONATCT</Link></li>
                </ul>
            </div>

            <div className="page-content p-5" id='content'>
                        <button onClick={Responsive} id='sidebarCollapse' type='button' className='btn btn-light bg-white rounded-pill shadow-sm fixed-top'>
                       <DehazeIcon className='align-item-center'/>
                </button>

            </div>
        </div>
    )
}

export default Navbar
