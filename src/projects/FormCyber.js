import React, { PureComponent } from 'react'

import FormCyberPager from './FormCyberPager'
// import CyberReg from './CyberReg'
// import CyberButton from './CyberButton'

class FormCyber extends PureComponent {
    constructor(props) {
      super(props)
    
      this.state = {
        name:'',
        email: '',
        setOpt: '',
      }
      this.buttonAction = this.buttonAction.bind(this)                           
    }
    nameHandler = (event) =>{
      this.setState({
        name:event.target.value,
      })
    }

    emailHandle =  (event) => {
      this.setState({
        email: event.target.value,
      })
    }

    setOptHandle = (event) =>{
      this.setState({
        setOpt: event.target.value
      })
    }
    buttonAction = (event) => {
      alert(`${this.state.name} ${this.state.email} ${this.state.setOpt}`)
     }

  render() {
    
    return (
      
      <div>
         <FormCyberPager nameHandleValue={this.state.name} nameHandling = {this.nameHandler} emailHandleValue={this.state.email} emailHandling = {this.emailHandle} setOptHandleValue={this.state.setOpt} setOptHandling = {this.setOptHandle} />
      </div>

    ) 
  }
}

export default FormCyber

