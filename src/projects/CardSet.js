import React, { Component } from 'react'
import '../../src/animate.css' 
import CyberLink from './CyberLink'
import MachineLearn from './MachineLearn'
import AiLearnig from './AiLearnig'
import Trading from './Trading'

class CardSet extends Component {
  render() {
   
    return (
        <div class=" row mt-2" style={{width:'98%', marginLeft:'1%'}}>
            <div class="col-sm-3 mb-3  mb-sm-0">
                <div class="card card1">
                    <div class="card-body">
                        <h5 className="card-title  d-block d-xsm-none  text-primary  depp">CYBER SECURITY & ETHICAL HACKING</h5>
                        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                        <CyberLink school1='HACKER mode' />
                        

                    </div>
                </div>
            </div>
            <div class="col-sm-3">
                <div class="card card1 ">
                    <div class="card-body">
                        <h5 class="card-title text-primary depp">EXPERT SYSTEM & MACHINE LEARNING</h5>
                        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                        <MachineLearn school2='Machine Learning' />

                    </div>
                </div>
            </div>
            <div class="col-sm-3">
                <div class="card card1">
                    <div class="card-body">
                        <h5 class="card-title text-primary  depp">ARTIFICIAL INTELLEGENCE $ OPERATING SYSTEM</h5>
                        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                        <AiLearnig school3 ='A.I Learning' />
                    </div>
                </div>
            </div>
            <div class="col-sm-3">
                <div class="card card1">
                    <div class="card-body">
                        <h5 class="card-title text-primary depp">FOREX AND CRYTOCURRENCY</h5>
                        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                        <Trading school4="TRADING" />
                    </div>
                </div>
            </div>
        </div>
    )
  }
}

export default CardSet