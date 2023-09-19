import React from 'react'
import Form from 'react-bootstrap/Form'

function FormCyberPager(props) {
    const List = [
        {
            id: '1',
            list: '3month'
        },
        {
            id: '2',
            list: '6month',
        },
        {
            id: '3',
            list: '1year',
        }

    ];
    const setName = List.map(optName => <option value = {optName.id}> {optName.list}</option>)

    return (
        <div>
            <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Full Name</Form.Label>
                <Form.Control type="text" value={props.nameHandleValue} onChange={props.nameHandling} placeholder='Enter your fullname' />
                <Form.Text className="text-muted"></Form.Text>

            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" value={props.emailHandleValue} onChange={props.emailHandling} placeholder='Enter your Email' />
                <Form.Text className="text-muted"></Form.Text>
            </Form.Group>

            <Form.Label>Time for your Training</Form.Label>
            <Form.Select value={props.setOptHandleValue} onChange={props.setOptHandling} aria-label="Default select example">
                <option>Choose.....</option>
                {setName}
            </Form.Select>

            

        
        </div>


    )
}
export default FormCyberPager;
