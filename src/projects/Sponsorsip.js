import React, { Component } from 'react'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import  Book1  from '../imageStorage/Cyber & Hack.png';
import  book2  from '../imageStorage/cyber booking.jpg';
import  book3  from '../imageStorage/CyberBackUp.png';
import  book4  from '../imageStorage/CyberBusinex.jpg';
import  book5  from '../imageStorage/CyberData.jpg';
import  book6  from '../imageStorage/CyberLiting.jpg';
import  book7  from '../imageStorage/CyberOutlook.jpg';
import  book8  from '../imageStorage/CyberRants.webp';
import  book9  from '../imageStorage/cyberSecurityLite.png';

import './Sponsorship.css'

export class Sponsorsip extends Component {
  render() {
    const display ={
      dots: false,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 2000,
      cssEase: "linear",

      className: "center",
      centerMode: true,
      centerPadding: "60px",


        
    }
    return (
        <div className='mainContainer'>
                <h2>Sponsorers</h2>
                <Slider {...display}>
                    <div className='container'>
                        <img src={Book1}  alt="..." />
                    </div>

                    <div className='container'>
                        <img src={book2}  alt="..." />
                    </div>

                    <div className='container'>
                        <img src={book3} alt="..." />
                    </div>

                    <div className='container'>
                        <img src={book4} alt="..." />
                    </div>

                    <div className='container'>
                        <img src={book5} alt="..." />
                    </div>

                    <div className='container'>
                        <img src={book6} alt="..." />
                    </div>

                    <div className='container'>
                        <img src={book7} alt="..." />
                    </div>

                    <div className='container'>
                        <img src={book8} alt="..." />
                    </div>

                    <div className='container'>
                        <img src={book9} alt="..." />
                    </div>
                </Slider>
            </div>

    )
  }
}

export default Sponsorsip