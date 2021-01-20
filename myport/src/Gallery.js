import React from 'react'
import './Gallery.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import img1 from '../src/Images/t-4.png'
import img2 from '../src/Images/t-5.jpg'
import img3 from '../src/Images/t-6.jpg'
import img4 from '../src/Images/t-7.jpg'
import img5 from '../src/Images/t-8.jpg'
import img6 from '../src/Images/unique addition.jpg'

function Gallery() {

    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
    };
    
    return (
        <section id='gallery'>
            <div className="page-content p-5" id='content'>
                <h2 className='display-4 text-white about_head'>GALLERY</h2>
                <div className="container slider py-5">
                <Slider className='slider-main' {...settings}>
                        <div className='box'>
                            <img src={img1} alt="" width='500' className='slider-image img-fluid' />
                    </div>
                    <div className='box'>
                    <img src={img2} alt="" width='500' className='slider-image img-fluid'  />
                    </div>
                    <div className='box'>
                    <img src={img3} alt="" width='500' className='slider-image img-fluid'/>
                    </div>
                    <div className='box'>
                    <img src={img4} alt="" width='500' className='slider-image img-fluid' />
                    </div>
                    <div className='box'>
                    <img src={img5} alt="" width='500' className='slider-image img-fluid'  />
                    </div>
                    <div className='box'>
                    <img src={img6} alt="" width='500' className='slider-image img-fluid'   />
                    </div>
                </Slider>
                    </div>
            </div>
        </section>
    )
}

export default Gallery
