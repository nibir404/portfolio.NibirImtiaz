import React from 'react'
import './Education.css'

function Education() {
    return (
        <section id='Education'>
        <div className="page-content p-5" id='content'>
            <h2 className='display-4 text-white about_head'>EDUCATION</h2>
            <div className="container bg-light py-5 education">
                <div className="row">
                    <div className="edu col-md-4">
                        <h2 className='edu_headText'>B.Sc</h2>
                        <h4 className='edu_secText'>DAFFODIL INSTITUTE OF IT</h4>
                        <p className='edu_leadText'>CGPA - 3.14(AVG)</p>
                        <p className='edu_leadText'>PASSING YEAR - 2022</p>
                    </div>
                    <div className="edu col-md-4">
                        <h2 className='edu_headText'>H.S.C</h2>
                        <h4 className='edu_secText'>NATIONAL BANK PUBLIC COLLEGE</h4>
                        <p className='edu_leadText'>GPA - 4.42</p>
                        <p className='edu_leadText'>PASSING YEAR - 2017</p>
                    </div>
                    <div className="edu col-md-4">
                        <h2 className='edu_headText'>S.S.C</h2>
                        <h4 className='edu_secText'>TEJGAON ADARSHA HIGH SCHOOL</h4>
                        <p className='edu_leadText'>GPA - 5.00</p>
                        <p className='edu_leadText'>PASSING YEAR - 2015</p>
                    </div>
                </div>
            </div>
            </div>
            </section>
    )
}

export default Education
