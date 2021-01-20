import React from 'react'
import './Skills.css'

export default function Skills() {
    return (
        <section id='skills'>
            <div className="page-content p-5" id='content'>
                <h2 className='display-4 text-white about_head'>SKILLS</h2>             
                <div className="skill container py-5 bg-light">
                    <ul>
                        <li className="html">HTML</li>
                        <li className="css">CSS</li>
                        <li className="bootstrap">BOOTSRAP</li>
                        <li className="jquery">JQUERY</li>
                        <li className="javascript">JAVASCRIPT</li>
                        <li className="react">REACT.js</li>
                        <li className="photoshop">PHOTOSHOP</li>
                        <li className="illustrator">ILLUSTRATOR</li>
                        <li className="premiere">PREMIERE PRO</li>
                        <li className="aftereffects">AFTER EFFECTS</li>
                   </ul> 
                </div>
            </div>
        </section>
    )
}
