import React from 'react'
import './Service.css'
import DesktopMacIcon from '@material-ui/icons/DesktopMac';
import BuildIcon from '@material-ui/icons/Build';
import WorkIcon from '@material-ui/icons/Work';
import BrushIcon from '@material-ui/icons/Brush';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import CodeIcon from '@material-ui/icons/Code';

export default function Service() {
    return (
        <section id='service'>
        <div className='page-content p-5' id='content'>
            <h2 className='display-4 text-white about_head'>SERVICE</h2>
                <div className="container py-5 bg-light serve">
                    <div className="row pb-3">
                        <div className="col-lg-4 mb-3">
                            <div className='card text-center'>
                                <div className="card-body">
                                    <div className="circle">
                                        <span className='card-icon'><DesktopMacIcon/></span>
                                    </div>
                                    <h4 className='font-weight-bold pb-2'>Web Design</h4>
                                    <p>Every individual companies and organizations
                                    need a website for promoting themselves in a market place.
                                    Modern generation demand website for hiring and giving works to
                                    the other. Design is one of them, and I can make your website more attractive
                                    and lively at a pixel perfect point.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 mb-3">
                            <div className='card text-center'>
                                <div className="card-body">
                                    <div className="circle">
                                        <span className='card-icon'><BuildIcon/></span>
                                    </div>
                                    <h4 className='font-weight-bold pb-2'>UI/UX Design</h4>
                                    <p>Now a days UI/UX is one of the major part of a
                                    website or application. People wants minimal,
                                    attractive, userfriendly and easy user interface
                                    for the app. I can ensure you the best design with the
                                    most simple way.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 mb-3">
                            <div className='card text-center'>
                                <div className="card-body">
                                    <div className="circle">
                                        <span className='card-icon'><WorkIcon/></span>
                                    </div>
                                    <h4 className='font-weight-bold pb-2'>Digital Marketing</h4>
                                    <p>People are much mordern now. They have so many
                                    social accounts. which make them too lazy to work. But using the Digital Marketing
                                    companies are able to reach the customers easily which is benificial
                                    for both of them. consumer get the best products and the companies
                                    doing there marketing easily.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 mb-3">
                            <div className='card text-center'>
                                <div className="card-body">
                                    <div className="circle">
                                        <span className='card-icon'><BrushIcon/></span>
                                    </div>
                                    <h4 className='font-weight-bold pb-2'>Graphics Design</h4>
                                    <p>Graphics is a special way to represent somthing
                                    attractive to the cusomers. It can be anything like Banner,
                                    Flyrs, Poster, mothion graphics, Intro etc.
                                     I can offer you the best content.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 mb-3">
                            <div className='card text-center'>
                                <div className="card-body">
                                    <div className="circle">
                                        <span className='card-icon'><VideoLibraryIcon/></span>
                                    </div>
                                    <h4 className='font-weight-bold pb-2'>Video Editing</h4>
                                    <p>Video content is the best way to being
                                    professional and different from the other companies in business
                                    sector. A good content has a good reach possibility.
                                    All i can offer you the best production from top to bottom.
                                    advertisement, motion video, short ads all are included.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 mb-3">
                            <div className='card text-center'>
                                <div className="card-body">
                                    <div className="circle">
                                        <span className='card-icon'><CodeIcon/></span>
                                    </div>
                                    <h4 className='font-weight-bold pb-2'>Development</h4>
                                    <p>Companies Want different technologies for
                                    their applications and websites. I work with different technologies
                                    or framework like react.js, vue.js, express.js, typescript,
                                    ecmascript etc. i can provide an application by using these
                                    technologies.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
        </section>
    )
}