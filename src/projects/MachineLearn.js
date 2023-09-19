import { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import '../../src/animate.css'

function MachineLearn(props) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div>
            <Button variant="primary butDepp" onClick={handleShow}> {props.school2} </Button>

            <Modal size="lg" show={show} onHide={handleClose} backdrop="static" keyboard={false} aria-labelledby="contained-modal-title-vcenter" centered>
                <Modal.Header closeButton>
                    <Modal.Title>Modal title</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    I will not close if you click outside me. Don not even try to press
                    escape key.
                </Modal.Body>
                
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}> Close </Button>
                    <Button variant="primary">Understood</Button>

                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default MachineLearn;