import React, { Component } from 'react'
import NavheadBody from './NavheadBody'

import '../../src/design.css'
import Twitter from '../imageStorage/twitter.webp'
import Whatsapp from '../imageStorage/whatsapp1.png'
import Instagram from '../imageStorage/instagram.png'
import Facebook from '../imageStorage/logo192.png'
import Youtube from '../imageStorage/youtube.png'

// import Music from '../music/c:\Users\Tommy\Desktop\create react app\fresh-work\src\music\Brymo-Billion-Naira-Dream.mp3'
class NavHead extends Component {
  constructor() {
    super()
    this.state = {
      Contact: 'ADDRESS LOCATION'

    }

  }
  transitionBut() {
    this.setState(
      {
        Contact: 'LOADING...'
      })

  }


  // componentDidMount (){
  //     this.interval = setInterval(() => {
  //         this.setState({
  //             Contact: 'thank you so much'
  //         })

  //     },  9000);
  // }



  //     () => {
  //         const interval = setInterval(() => {
  //             setSeconds(seconds => seconds + 1)}, 1000);
  //                    return () => clearInterval(interval);
  //         }, []);
  //     }
  // seEffect(() => {
  //     const interval = setInterval(() => {
  //       setSeconds(seconds => seconds + 1);
  //     }, 1000);
  //     return () => clearInterval(interval);
  //   }, []);
  // }

  render() {
    return (
      <div>
       

        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class=" text-center " style={{width:'50%', marginLeft:'40%'}}>
          <div class="row ">
            <div class="col ">
            <img src={Facebook} className='fb' style={{ height: '45px',  marginLeft:'60%'}} alt="" />

            </div>
            <div class="col ">
            <img src={Twitter} className='' style={{ height: '40px',marginLeft:'-44%' }} alt="" />
            </div>
            <div class="col ">
            <img src={Whatsapp} className='' style={{ height: '55px', marginLeft:'-35%', marginTop:'-6px' }} alt="" />
            </div>
            <div class="col">
            <img src={Instagram } className='' style={{ height: '45px', marginLeft:'-405%', marginTop:'-1px'}} alt="" />
            </div>
            <div class="col mt-2 ">
            <img src={Youtube } className='' style={{ height: '34px', marginLeft:'-409%', marginTop:'-6px' }} alt="" />
            </div>
          </div>
        

        </div>



        <NavheadBody />





      </div>
    )
  }
}

export default NavHead