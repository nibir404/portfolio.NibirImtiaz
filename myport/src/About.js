import React from 'react'
import img1 from '../src/Images/1.png'
import './About.css'

function About() {
    return (
        <section id='about'>
        <div className="page-content p-5" id='content'>
            <h2 className='display-4 text-white about_head'>ABOUT</h2>
            <div className="container bg-light main-about">
                <div className="row">
                    <div className="about-img col-lg-4 text-center">
                        <img src={img1} width='300px' alt="" className='img-fluid animated'/>
                    </div>
                    <div className="col-md-6 text-center">
                        <h3 className='about-head'>HI,</h3>
                        <h3 className='about-head1'>MYSELF <span className='about-mod'>NIBIR IMTIAZ</span></h3>
                        <p className='lead-text'>i am a web developer and a graphics designer.
                        i basically work on design but my first priority.
                        recently i am working with <span className='about-mod'>react.js</span> </p>
                    </div>
                </div>
                </div>
            </div>
        </section>
    ) 
}

export default About
