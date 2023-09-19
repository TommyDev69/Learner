import React from 'react'
import { Button, Card, Form, datalist } from 'react-bootstrap';
import '../../src/signUp.css'

function PageSign() {
    const Status = ['Facilitator', 'Client']
    return (
        <Card className="text-center pack pack1 signBody">
            <Card.Header>Featured</Card.Header>
            <Card.Body>
                <Card.Title>Special title treatment</Card.Title>
                <Card.Text>
                    <Form >

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label className='Label' >UPLOAD PHOTO</Form.Label>
                            <Form.Control type="file" className='field' placeholder="upload Photo" />


                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label className='Label' >ENTER YOUR FULLNAME</Form.Label>
                            <Form.Control type="text" className='field' placeholder="Enter Your FullName" />

                        </Form.Group>

                        <Form.Label className='Label' >GENDER</Form.Label>

                        <input class="form-control" list="datalistOptions" id="exampleDataList" placeholder="Type to search..." />
                        <datalist id="datalistOptions">
                            <option value="MALE" />
                            <option value="FEMALE" />

                        </datalist>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label className='Label'> EMAIL ADDRESS</Form.Label>
                            <Form.Control type="email" className='field' placeholder="Enter email" />

                        </Form.Group>


                        <Form.Group className="mb-3" controlInd="formBasicPassword">
                            <Form.Label className='Label'>PASSWORD</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox"  className='mark' label="Check me out" />
                        </Form.Group>
                        <Button variant="primary row col-8" type="submit">
                        Submit
                    </Button>
                    </Form>
                </Card.Text>
            </Card.Body>
            <Card.Footer className="text-muted">2 days ago</Card.Footer>
        </Card>

    )
}

export default PageSign