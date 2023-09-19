import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faBlenderPhone, faEnvelope, faFaceFrown, faHandshake, faPersonBreastfeeding, faBullhorn} from '@fortawesome/free-solid-svg-icons'
import './Footer.css'
import { Link } from "react-router-dom";

class Footer extends Component {
    render() {
        return (
            <div className='jumbron bg-dark text-light container-md-fluid mt-5'>
                <div className='row '>
                    <div className='col-4 first'>
                        <h2 className='contact'> contact us</h2>
                        <div className='set' style={{ paddingLeft: '40%' }}>
                            <Link to="/contact" className="nav-link text-white " role="status" data-bs-toggle="offcanvas" data-bs-target="#offcanvasTop" aria-controls="offcanvasTop">
                                <span className='phoney'> <FontAwesomeIcon icon={faLocationDot} /> &nbsp;Location</span>
                            </Link>
                        </div>

                        <div className='mt-3 text-white phone'>
                            <span className='phoney'> <FontAwesomeIcon className='phoney' icon={faBlenderPhone} /> &nbsp; Call +2349026274950</span>
                        </div>

                        <div className='mt-3 text-white phone'>
                            <span className='phoney '> <FontAwesomeIcon className='phoney' icon={faEnvelope} /> &nbsp; sunnevian4life@gmail.com</span>

                        </div>
                    </div>

                    <div className='col-4 second pt-4'>
                        <h2 className='contact'> TommyReact</h2>
                        <p className='text-center'>Coding is actually an expression of motivation for solving problem for human but it
                            take alot of challengies and debugging. I practice  hard to see some hidden secret of
                            what i dont know. 
                        </p>
                        <div className='text-center'>
                        <FontAwesomeIcon icon={faFaceFrown} className='text-warning' style={{paddingLeft:'20px', fontSize:'24px'}} beatFade /> 
                         <FontAwesomeIcon icon={faHandshake} className='text-warning' style={{paddingLeft:'20px', fontSize:'24px'}}  beatFade/>
                        <FontAwesomeIcon icon={faPersonBreastfeeding} className='text-warning' style={{paddingLeft:'20px', fontSize:'24px'}}  beatFade /> 

                        </div>

                        <p className='text-center pt-5' style={{ fontSize:'20px'}}> &copy; 2023 All Reserved By React Code</p>
                        <p className='text-center'> &copy; Distributed By TommyDev69</p>
                    </div>

                    <div className='col-4 second '>
                        <h2 className='contact'> opening Hours</h2>
                        <p className='text-center'>Everyday
                        </p>
                        <div className='text-center'>
                        <p>8.00 Am - 8.00 Pm</p>
                        <FontAwesomeIcon icon={faBullhorn} className='text-warning' style={{paddingLeft:'20px', fontSize:'24px'}}  beatFade /> 

                        </div>

                       
                    </div>
                </div>
            </div>
        )
    }
}

export default Footer