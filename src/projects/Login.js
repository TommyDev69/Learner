import React from 'react'
import { Button, Card, Form } from 'react-bootstrap';
import '../../src/signUp.css'
function SignUp() {
    return (
<div className='container-md-fluid'>
        <Card className="text-center pack  signBody">
            <Card.Header>Featured</Card.Header>
            <Card.Body>
                <Card.Title>Special title treatment</Card.Title>
                <Card.Text>
                    <Form >
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label className='Label' >Email address</Form.Label>
                            <Form.Control type="email" className='field' placeholder="Enter email" />

                        </Form.Group>

                        <Form.Group className="mb-3" controlInd="formBasicPassword">
                            <Form.Label className='Label'>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" className='mark' label="Check me out" />
                        </Form.Group>
                        <Button variant="primary row col-8" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Card.Text>
            </Card.Body>
            <Card.Footer className="text-muted">2 days ago</Card.Footer>
        </Card>
        </div>




    )

}

export default SignUp