import React, { Component } from 'react'
import Form from 'react-bootstrap/Form'

class CyberSelectCode extends Component {
    constructor(props) {
        super(props)
      
        this.state = {
          name:'',
          email: '',
          setOpt: ''
        }
        this.nameHandler = this.nameHandler.bind(this)
      }
      nameHandler =(event) =>{
       
          this.setState({
              name:event.target.value,
             
          })
          
      }
     
  
      emailHandle =  event => {
        this.setState({
          email: event.target.value
        })
      }
  
      setOptHandle = event =>{
        this.setState({
          setOpt: event.target.value
        })
      }
    render() {
        return (
            
            <Form>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control type="text" value={this.state.name} onChange={this.nameHandler} placeholder='Enter your fullname' />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" value={this.state.email} onChange={this.emailHandle} placeholder='Enter your Email' />
                    
                  
                </Form.Group>

            


        </Form>
        
       

    )
  }
}
export default CyberSelectCode