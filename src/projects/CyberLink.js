import React from 'react'
import { Button, Modal } from "react-bootstrap";
import '../../src/animate.css'
import CyberReg from './CyberReg';
// import CyberButton from './CyberButton';
class CyberLink extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            show: false
        }
        this.modalToggle = this.modalToggle.bind(this)
    }

    modalToggle() {
        this.setState({
            show: !this.state.show
        })
    }
    render() {
        const { school1 } = this.props
        return (
            <div>
                <Button variant="primary butDepp" onClick={this.modalToggle}>
                    {school1}
                </Button>
                <Modal size="lg" show={this.state.show} aria-labelledby="contained-modal-title-vcenter" centered>
                    <Modal.Header closeButton onClick={this.modalToggle}>
                        <Modal.Title>Facilitator comment</Modal.Title>
                    </Modal.Header>
                    <Modal.Body className='bg-dark text-white'>
                        <pre>Good Afternoon (Name),</pre>
                        <p>I am a specialist Autism trained teacher (Specialized area) from the Uk (Country name and educational qualification).
                            I train parents, teaching assistants, new teachers and other professionals in autism awareness and autism strategies
                            for parents for the home setting through the (program name). I am on (City or area name) every year for 4-6 weeks if
                            you are interested in my services. I have only recently heard about your school and I am returning to (Country name)
                            on (Date). If you are interested please do not hesitate to contact me as I am staying with relatives near your school.

                            Course materials for the (program name) can be obtained in English and (Other language). Any other courses I can tailor
                            to the needs of your staff but these will be in English. </p>

                        Kind Regards,

                        Your name…
                    </Modal.Body>

                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.modalToggle} >
                            Understood
                        </Button>
                        
                        <CyberReg variant="primary" />
                    </Modal.Footer>
                </Modal>
            </div>
        )
    }
}

export default CyberLink