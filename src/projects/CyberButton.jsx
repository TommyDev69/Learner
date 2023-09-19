// import {useState} from 'react'
// import Button from 'react-bootstrap/Button'
// function CyberButton(props) { 
// const [show, setShow] = useState(false);
 
//   // const handleClose = () => setShow(false);
//   // const handleShow = () => setShow(true); 

// // const CyberButton =(props) => {
//   return (
//     <div> 
      
//     <Button variant="primary" onClick={() => setShow(true)}> {props.name} </Button>
//     </div>
//   )
// }

// export default CyberButton



// // const [show, setShow] = useState(false);

// //     const handleClose = () => setShow(false);
// //     const handleShow = () => setShow(true); 

// // import React, { Component } from 'react'
// // import Button from 'react-bootstrap/Button'


// // class CyberButton extends Component {
// //   constructor(props) {
// //     super(props)

// //     this.state = {
// //       handler: ''
// //     }
// //   }
// //   buttonAction = (event) => {
// //     alert('')

// //   }

// //   render() {
// //     return (
// //       <div>
// //         <Button variant="primary" type='submit' buttonHandling={this.buttonAction}> {props.name} </Button>
// //       </div>
// //     )
// //   }
// // }

// // export default CyberButton;

import React, { Component } from 'react'
import Button from 'react-bootstrap/Button'


class CyberButton extends Component {
  constructor(props) {
       super(props)
    
        this.state = {
           handler: ''
         }
       }
       buttonAction = (event) => {
        alert('')
       }
  render() {
    return (
      <div>
        <Button variant="primary" type='submit'> {this.props.name} </Button>
        

      </div>
    )
  }
}

export default CyberButton