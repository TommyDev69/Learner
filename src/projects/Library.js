import React, { Component } from 'react';
import Book1 from '../imageStorage/cyber booking.jpg'
import Book2 from '../imageStorage/CyberRants.webp'
import Book3 from '../imageStorage/cyberSecurityLite.png'
import Book4 from '../imageStorage/Cyber & Hack.png'
import Book5 from '../imageStorage/CyberLiting.jpg'
import Book6 from '../imageStorage/CyberBusinex.jpg'
import Book7 from '../imageStorage/CyberBackUp.png'
import Book8 from '../imageStorage/CyberData.jpg'
import Book9 from '../imageStorage/CyberOutlook.jpg'





import { Row, Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping, faHeart, faSyncAlt, faSearch, faStar } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom";

class Library extends Component {
    render() {
        return (
            <div style={{ width: '90%', marginLeft: '5%', height: '248vh' }}>
                <Container >
                    <Row>
                        <div className='col-4'>


                            <div class="card" style={{ height: '76vh' }}>
                                <img src={Book1} className='w-100 w-md-50 h-50' alt="..." />
                                <div class="product-action text-center mt-4">


                                    <Link to={'/'} class="btn  text-white  outline-success btn-square" style={{ backgroundColor: '#0d6efd' }}> <FontAwesomeIcon icon={faCartShopping} /> </Link>
                                    <Link to={'/'} class="btn outline-dark btn-square" ><FontAwesomeIcon icon={faHeart} /> </Link>
                                    <Link to={'/'} class="btn outline-dark btn-square"> <FontAwesomeIcon icon={faSyncAlt} /> </Link>
                                    <Link to={'/'} class="btn outline-dark btn-square"> <FontAwesomeIcon icon={faSearch} /> </Link>

                                </div>
                                <div class="card-body" >
                                    <div class="text-center" style={{ paddingBottom: '69px' }} >
                                        <p class=" text-center text text-truncate">MULTIMEDIA</p>
                                        <div class="d-flex align-items-center justify-content-center pb-1">
                                            <h5>#15,500</h5>
                                            <h6 class="text-muted ml-2"> &nbsp; <del>#20,000</del></h6>
                                        </div>
                                        <div class="d-flex align-items-center justify-content-center mb-1">

                                            <small class=" text-primary text-center"><FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} />
                                                <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} />  <FontAwesomeIcon icon={faStar} /> </small>

                                            <small className='text'>(99) &copy; COPIES</small>
                                        </div>
                                        <Link to={'/'} class="btn btn-primary">PURCHASE</Link>

                                    </div>
                                </div>
                            </div>

                        </div>

                        <div className='col-4'>
                            <div class="card" style={{ height: '76vh' }} >
                                <img src={Book2} className='w-100 w-md-50 h-50' alt="..." />
                                <div class="product-action text-center mt-4" >

                                    <Link to={'/'} class="btn  text-white  outline-success btn-square" style={{ backgroundColor: '#0d6efd' }}> <FontAwesomeIcon icon={faCartShopping} /> </Link>
                                    <Link to={'/'} class="btn outline-dark btn-square" href=""><FontAwesomeIcon icon={faHeart} /> </Link>
                                    <Link to={'/'} class="btn outline-dark btn-square" href=""> <FontAwesomeIcon icon={faSyncAlt} /> </Link>
                                    <Link to={'/'} class="btn outline-dark btn-square" href=""> <FontAwesomeIcon icon={faSearch} /> </Link>

                                </div>
                                <div class="card-body" >
                                    <div class="text-center" style={{ paddingBottom: '69px' }} >
                                        <p class=" text-center text text-truncate">MULTIMEDIA</p>
                                        <div class="d-flex align-items-center justify-content-center pb-1">
                                            <h5>#15,500</h5>
                                            <h6 class="text-muted ml-2"> &nbsp; <del>#20,000</del></h6>
                                        </div>
                                        <div class="d-flex align-items-center justify-content-center mb-1">

                                            <small class=" text-primary text-center"><FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} />
                                                <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} />  <FontAwesomeIcon icon={faStar} /> </small>

                                            <small className='text'>(99) &copy; COPIES</small>
                                        </div>
                                        <Link to={'/'} class="btn btn-primary">PURCHASE</Link>

                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='col-4'>
                            <div class="card" style={{ height: '76vh' }} >
                                <img src={Book3} className='w-50 w-md-100 h-50' alt="..." style={{ paddingTop: '15px', marginLeft: '75px' }} />
                                <div class="product-action text-center mt-3" >


                                    <Link to={'/'} class="btn  text-white  outline-success btn-square" style={{ backgroundColor: '#0d6efd' }}> <FontAwesomeIcon icon={faCartShopping} /> </Link>
                                    <Link to={'/'} class="btn outline-dark btn-square" href=""><FontAwesomeIcon icon={faHeart} /> </Link>
                                    <Link to={'/'} class="btn outline-dark btn-square" href=""> <FontAwesomeIcon icon={faSyncAlt} /> </Link>
                                    <Link to={'/'} class="btn outline-dark btn-square" href=""> <FontAwesomeIcon icon={faSearch} /> </Link>



                                </div>
                                <div class="card-body" >
                                    <div class="text-center" style={{ paddingBottom: '69px' }} >
                                        <p class=" text-center text text-truncate">MULTIMEDIA</p>
                                        <div class="d-flex align-items-center justify-content-center pb-1">
                                            <h5>#15,500</h5>
                                            <h6 class="text-muted ml-2"> &nbsp; <del>#20,000</del></h6>
                                        </div>
                                        <div class="d-flex align-items-center justify-content-center mb-1">

                                            <small class=" text-primary text-center"><FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} />
                                                <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} />  <FontAwesomeIcon icon={faStar} /> </small>

                                            <small className='text'>(99) &copy; COPIES</small>
                                        </div>
                                        <Link to={'/'} class="btn btn-primary">PURCHASE</Link>

                                    </div>
                                </div>
                            </div>
                        </div>


                    </Row>

                    <Row className='mt-3'>
                        <div className='col-4'>


                            <div class="card" style={{ height: '76vh' }}>
                                <img src={Book4} className='w-100 w-md-50 h-50' alt="..." />
                                <div class="product-action text-center mt-4">


                                    <Link to={'/'} class="btn  text-white  outline-success btn-square" style={{ backgroundColor: '#0d6efd' }}> <FontAwesomeIcon icon={faCartShopping} /> </Link>
                                    <Link to={'/'} class="btn outline-dark btn-square" ><FontAwesomeIcon icon={faHeart} /> </Link>
                                    <Link to={'/'} class="btn outline-dark btn-square"> <FontAwesomeIcon icon={faSyncAlt} /> </Link>
                                    <Link to={'/'} class="btn outline-dark btn-square"> <FontAwesomeIcon icon={faSearch} /> </Link>

                                </div>
                                <div class="card-body" >
                                    <div class="text-center" style={{ paddingBottom: '69px' }} >
                                        <p class=" text-center text text-truncate">MULTIMEDIA</p>
                                        <div class="d-flex align-items-center justify-content-center pb-1">
                                            <h5>#15,500</h5>
                                            <h6 class="text-muted ml-2"> &nbsp; <del>#20,000</del></h6>
                                        </div>
                                        <div class="d-flex align-items-center justify-content-center mb-1">

                                            <small class=" text-primary text-center"><FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} />
                                                <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} />  <FontAwesomeIcon icon={faStar} /> </small>

                                            <small className='text'>(99) &copy; COPIES</small>
                                        </div>
                                        <Link to={'/'} class="btn btn-primary">PURCHASE</Link>

                                    </div>
                                </div>
                            </div>

                        </div>

                        <div className='col-4'>
                            <div class="card" style={{ height: '76vh' }} >
                                <img src={Book5} className='w-100 w-md-50 h-50' alt="..." />
                                <div class="product-action text-center mt-4" >

                                    <Link to={'/'} class="btn  text-white  outline-success btn-square" style={{ backgroundColor: '#0d6efd' }}> <FontAwesomeIcon icon={faCartShopping} /> </Link>
                                    <Link to={'/'} class="btn outline-dark btn-square" href=""><FontAwesomeIcon icon={faHeart} /> </Link>
                                    <Link to={'/'} class="btn outline-dark btn-square" href=""> <FontAwesomeIcon icon={faSyncAlt} /> </Link>
                                    <Link to={'/'} class="btn outline-dark btn-square" href=""> <FontAwesomeIcon icon={faSearch} /> </Link>

                                </div>
                                <div class="card-body" >
                                    <div class="text-center" style={{ paddingBottom: '69px' }} >
                                        <p class=" text-center text text-truncate">MULTIMEDIA</p>
                                        <div class="d-flex align-items-center justify-content-center pb-1">
                                            <h5>#15,500</h5>
                                            <h6 class="text-muted ml-2"> &nbsp; <del>#20,000</del></h6>
                                        </div>
                                        <div class="d-flex align-items-center justify-content-center mb-1">

                                            <small class=" text-primary text-center"><FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} />
                                                <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} />  <FontAwesomeIcon icon={faStar} /> </small>

                                            <small className='text'>(99) &copy; COPIES</small>
                                        </div>
                                        <Link to={'/'} class="btn btn-primary">PURCHASE</Link>

                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='col-4'>
                            <div class="card" style={{ height: '76vh' }} >
                                <img src={Book6} className='w-50 w-md-100' alt="..." style={{  paddingTop: '15px', marginLeft: '75px' }} />
                                <div class="product-action text-center"  style={{ marginTop:'19%'}} >


                                    <Link to={'/'} class="btn  text-white  outline-success btn-square" style={{ backgroundColor: '#0d6efd' }}> <FontAwesomeIcon icon={faCartShopping} /> </Link>
                                    <Link to={'/'} class="btn outline-dark btn-square" href=""><FontAwesomeIcon icon={faHeart} /> </Link>
                                    <Link to={'/'} class="btn outline-dark btn-square" href=""> <FontAwesomeIcon icon={faSyncAlt} /> </Link>
                                    <Link to={'/'} class="btn outline-dark btn-square" href=""> <FontAwesomeIcon icon={faSearch} /> </Link>



                                </div>
                                <div class="card-body" >
                                    <div class="text-center" style={{ paddingBottom: '69px'}} >
                                        <p class=" text-center text text-truncate">MULTIMEDIA</p>
                                        <div class="d-flex align-items-center justify-content-center pb-1">
                                            <h5>#15,500</h5>
                                            <h6 class="text-muted ml-2"> &nbsp; <del>#20,000</del></h6>
                                        </div>
                                        <div class="d-flex align-items-center justify-content-center mb-1">

                                            <small class=" text-primary text-center"><FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} />
                                                <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} />  <FontAwesomeIcon icon={faStar} /> </small>

                                            <small className='text'>(99) &copy; COPIES</small>
                                        </div>
                                        <Link to={'/'} class="btn btn-primary">PURCHASE</Link>

                                    </div>
                                </div>
                            </div>
                        </div>


                    </Row>


                    <Row className='mt-3'>
                        <div className='col-4'>


                            <div class="card" style={{ height: '76vh' }}>
                                <img src={Book7} className='w-100 w-md-50 h-50' alt="..." />
                                <div class="product-action text-center mt-4">


                                    <Link to={'/'} class="btn  text-white  outline-success btn-square" style={{ backgroundColor: '#0d6efd' }}> <FontAwesomeIcon icon={faCartShopping} /> </Link>
                                    <Link to={'/'} class="btn outline-dark btn-square" ><FontAwesomeIcon icon={faHeart} /> </Link>
                                    <Link to={'/'} class="btn outline-dark btn-square"> <FontAwesomeIcon icon={faSyncAlt} /> </Link>
                                    <Link to={'/'} class="btn outline-dark btn-square"> <FontAwesomeIcon icon={faSearch} /> </Link>

                                </div>
                                <div class="card-body" >
                                    <div class="text-center" style={{ paddingBottom: '69px' }} >
                                        <p class=" text-center text text-truncate">MULTIMEDIA</p>
                                        <div class="d-flex align-items-center justify-content-center pb-1">
                                            <h5>#15,500</h5>
                                            <h6 class="text-muted ml-2"> &nbsp; <del>#20,000</del></h6>
                                        </div>
                                        <div class="d-flex align-items-center justify-content-center mb-1">

                                            <small class=" text-primary text-center"><FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} />
                                                <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} />  <FontAwesomeIcon icon={faStar} /> </small>

                                            <small className='text'>(99) &copy; COPIES</small>
                                        </div>
                                        <Link to={'/'} class="btn btn-primary">PURCHASE</Link>

                                    </div>
                                </div>
                            </div>

                        </div>

                        <div className='col-4'>
                            <div class="card" style={{ height: '76vh' }} >
                                <img src={Book8} className='w-100 w-md-50 h-50' alt="..." />
                                <div class="product-action text-center mt-4" >

                                    <Link to={'/'} class="btn  text-white  outline-success btn-square" style={{ backgroundColor: '#0d6efd' }}> <FontAwesomeIcon icon={faCartShopping} /> </Link>
                                    <Link to={'/'} class="btn outline-dark btn-square" href=""><FontAwesomeIcon icon={faHeart} /> </Link>
                                    <Link to={'/'} class="btn outline-dark btn-square" href=""> <FontAwesomeIcon icon={faSyncAlt} /> </Link>
                                    <Link to={'/'} class="btn outline-dark btn-square" href=""> <FontAwesomeIcon icon={faSearch} /> </Link>

                                </div>
                                <div class="card-body" >
                                    <div class="text-center" style={{ paddingBottom: '69px' }} >
                                        <p class=" text-center text text-truncate">MULTIMEDIA</p>
                                        <div class="d-flex align-items-center justify-content-center pb-1">
                                            <h5>#15,500</h5>
                                            <h6 class="text-muted ml-2"> &nbsp; <del>#20,000</del></h6>
                                        </div>
                                        <div class="d-flex align-items-center justify-content-center mb-1">

                                            <small class=" text-primary text-center"><FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} />
                                                <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} />  <FontAwesomeIcon icon={faStar} /> </small>

                                            <small className='text'>(99) &copy; COPIES</small>
                                        </div>
                                        <Link to={'/'} class="btn btn-primary">PURCHASE</Link>

                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='col-4'>
                            <div class="card" style={{ height: '76vh' }} >
                                <img src={Book9} className='w-50 w-md-100 h-50' alt="..." style={{ paddingTop: '15px', marginLeft: '75px' }} />
                                <div class="product-action text-center mt-4" >


                                    <Link to={'/'} class="btn  text-white  outline-success btn-square" style={{ backgroundColor: '#0d6efd' }}> <FontAwesomeIcon icon={faCartShopping} /> </Link>
                                    <Link to={'/'} class="btn outline-dark btn-square" href=""><FontAwesomeIcon icon={faHeart} /> </Link>
                                    <Link to={'/'} class="btn outline-dark btn-square" href=""> <FontAwesomeIcon icon={faSyncAlt} /> </Link>
                                    <Link to={'/'} class="btn outline-dark btn-square" href=""> <FontAwesomeIcon icon={faSearch} /> </Link>



                                </div>
                                <div class="card-body" >
                                    <div class="text-center" style={{ paddingBottom: '69px' }} >
                                        <p class=" text-center text text-truncate">MULTIMEDIA</p>
                                        <div class="d-flex align-items-center justify-content-center pb-1">
                                            <h5>#15,500</h5>
                                            <h6 class="text-muted ml-2"> &nbsp; <del>#20,000</del></h6>
                                        </div>
                                        <div class="d-flex align-items-center justify-content-center mb-1">

                                            <small class=" text-primary text-center"><FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} />
                                                <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} />  <FontAwesomeIcon icon={faStar} /> </small>

                                            <small className='text'>(99) &copy; COPIES</small>
                                        </div>
                                        <Link to={'/'} class="btn btn-primary">PURCHASE</Link>

                                    </div>
                                </div>
                            </div>
                        </div>


                    </Row>

                </Container>
            </div>
        )
    }
}

export default Library;