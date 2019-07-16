import React from 'react'
import placeholder from 'assets/icons/160x90.png'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './projectProfilePartnershipMobileSlider.scss'

const settings = {
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 700,
        },
        {
            breakpoint: 10000,
            settings: 'unslick'
        }
    ]
};


const ProjectProfilePartnershipsMobileSlider = () =>
    <>
        <Slider {...settings}>
            <img src={placeholder} alt=""/>
            <img src={placeholder} alt=""/>
            <img src={placeholder} alt=""/>
            <img src={placeholder} alt=""/>
            <img src={placeholder} alt=""/>
            <img src={placeholder} alt=""/>
        </Slider>
    </>

export default ProjectProfilePartnershipsMobileSlider