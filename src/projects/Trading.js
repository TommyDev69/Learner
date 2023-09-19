import {useState} from 'react'
import {Button, Modal} from 'react-bootstrap/';
import '../../src/animate.css'

function Trading(props) {
    const [modalShow, setModalShow] = useState(false);
    return (
        <div>
            <Button variant="primary butDepp" onClick={() => setModalShow(true)}> {props.school4}</Button>
           
            <Modal size="lg" show={modalShow} onHide={() => setModalShow(false)} aria-labelledby="contained-modal-title-vcenter" centered>
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        TRADING ANNOUNCEMENT
                        
                    </Modal.Title>
                </Modal.Header>
                
                <Modal.Body>
                    <h4>Centered Modal</h4>
                    <p>
                        Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
                        dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
                        consectetur ac, vestibulum at eros.
                    </p>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={() => setModalShow(false)}>Close</Button>
                    <Button variant="primary">Understood</Button>

                </Modal.Footer>
            </Modal>
        </div>
  )
}

export default Trading