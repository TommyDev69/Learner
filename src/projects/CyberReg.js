import { useState } from 'react';
import { Button, Modal, Form } from 'react-bootstrap/';
import openMind from '../imageStorage/openMind.gif'
import FormCyber from './FormCyber';
import CyberButton from './CyberButton';

function CyberReg(props) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div>
            <Button variant="primary" onClick={handleShow}>
                Register
            </Button>

            <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false} dialog style={{ backgroundImage: `url(${openMind})` }} aria-labelledby="contained-modal-title-vcenter" centered>
                <Modal.Header closeButton>
                    <Modal.Title>Modal title</Modal.Title>
                </Modal.Header>
                <Form onSubmit={props.buttonActionHandling}>
                    <Modal.Body className='bg-dark text-white'>

                        <FormCyber />


                    </Modal.Body> 
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Subcribe
                        </Button>

                        <CyberButton name = 'EDIT DATA'/>

                    </Modal.Footer>
                </Form>
            </Modal>
        </div>
    );
}
export default CyberReg
