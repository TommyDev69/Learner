import React, { Component } from 'react'
import hacker1 from '../imageStorage/webbar.jpg'
import cyberlinker from '../imageStorage/cyber2.jpg'
import hacker2 from '../imageStorage/hack3.jpg'
import hacker3 from '../imageStorage/hack.jpg'
import cyberlinker2 from '../imageStorage/cyber1.webp'

// import App from './App';

export class Caurosel extends Component {
  render() {
    return (

        <div id="carouselExampleDark" className="carousel carousel-dark slide" >
            <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" style={{borderRadius:'100%', backgroundColor:'white', height:'5vh'}} aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" style={{borderRadius:'100%', backgroundColor:'white', height:'5vh'}} aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" style={{borderRadius:'100%', backgroundColor:'white', height:'5vh'}} aria-label="Slide 3"></button>
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="3" style={{borderRadius:'100%', backgroundColor:'white', height:'5vh'}} aria-label="Slide 4"></button>
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="4" style={{borderRadius:'100%', backgroundColor:'white', height:'5vh'}} aria-label="Slide 5"></button>


            </div>
            <div class="carousel-inner">
                <div class="carousel-item active" data-bs-interval="10000">
                    <img src={hacker1} className="d-block w-100" style={{height:'84vh'}} alt="..." />
                    <div class="carousel-caption d-none d-md-block">
                        <h5 className='text-light'>THIS SECTION PROTECT INTRUDERS </h5>
                        <p className='text-light'>this material is legalize to show how much u are learn hacking and use it to protect the work from getting robbed</p>
                    </div>
                </div>

                <div class="carousel-item" data-bs-interval="7000">
                    <img src={cyberlinker} class="d-block w-100" style={{height:'84vh'}} alt="..." />

                    <div class="carousel-caption d-none d-md-block">
                        <h5>Second slide label</h5>
                        <p>Some representative placeholder content for the second slide.</p>
                    </div>
                </div>

                <div class="carousel-item" data-bs-interval="5000">
                    <img src={hacker2} class="d-block w-100" style={{height:'84vh'}} alt="..." />

                    <div class="carousel-caption d-none d-md-block">
                        <h5>Third slide label</h5>
                        <p>Some representative placeholder content for the third slide.</p>
                    </div>
                </div>

                <div class="carousel-item " data-bs-interval="3000">
                    <img src={hacker3} class="d-block w-100" style={{height:'84vh'}} alt="..." />
                    <div class="carousel-caption d-none d-md-block">
                        <h5>First slide label</h5>
                        <p>Some representative placeholder content for the first slide.</p>
                    </div>
                </div>

                <div class="carousel-item " data-bs-interval="1000">
                    <img src={cyberlinker2} class="d-block w-100" style={{height:'84vh'}} alt="..." />
                    <div class="carousel-caption d-none d-md-block">
                        <h5>First slide label</h5>
                        <p>Some representative placeholder content for the first slide.</p>
                    </div>
                </div>
               
            </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden ">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
    
    )
  }
}

export default Caurosel