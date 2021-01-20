import React from 'react'
import './Experience.css'

function Experience() {
    return (
        <section id='Experience'>
        <div  className="page-content p-5" id='content'>
            <h2 className='display-4 text-white about_head'>EXPERIENCE</h2>
            <div className="container bg-light py-5 experience">
                <div className="row">
                    <div className="col-md-3">
                        <h2 className='text-white'>Graphics Designer</h2>
                        <h4 className='text-white'>New Foods</h4>
                        <p className='text-white'>2020-Continue</p>
                    </div>
                    <div className="col-md-3">
                        <h2 className='text-white'>Web Developer</h2>
                        <h4 className='text-white'>Needleman</h4>
                        <p className='text-white'>2020-Continue</p>
                    </div>
                    <div className="col-md-3">
                        <h2 className='text-white'>Content Designer</h2>
                        <h4 className='text-white'>LiveGear</h4>
                        <p className='text-white'>2019-2020</p>
                    </div>
                    <div className="col-md-3">
                        <h2 className='text-white'>Content Editor</h2>
                        <h4 className='text-white'>Studio ClickBuzz</h4>
                        <p className='text-white'>2017-2019</p>
                    </div>
                </div>
            </div>
            </div>
        </section>
    )
}

export default Experience
