import React, {Component} from 'react';
import {Col, Button, Form, FormGroup, Label, Input} from 'reactstrap'


export default class AddForm extends Component {
    render() {
        return (
            <Col xs='3' className="text-center">
                <Form action="#">
                    <FormGroup>
                        <Label for="name">Name</Label>
                        <Input className="form-control" id="name" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="ip">IP-adress</Label>
                        <Input className="form-control" id="ip" />
                    </FormGroup>
                      <Button type="submit" className="btn-success">Add</Button>
                </Form>
            </Col>
        )
    } 
}