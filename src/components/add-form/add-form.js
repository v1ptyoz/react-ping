import React, {Component} from 'react';
import {Col, Button, Form, FormGroup, Label, Input} from 'reactstrap'


export default class AddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            ip: ''
        }
        this.onNameChange = this.onNameChange.bind(this);
        this.onIpChange = this.onIpChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onNameChange(e) {
        this.setState({
            name: e.target.value
        })
    }

    onIpChange(e) {
        this.setState({
            ip: e.target.value
        })
    }

    onSubmit(e) {
        e.preventDefault();
        this.props.onAdd(this.state.name, this.state.ip);

        this.setState({
            name: '',
            ip: ''
        })
    }

    render() {
        return (
            <Col xs='3' className="text-center">
                <Form onSubmit={this.onSubmit}>
                    <FormGroup>
                        <Label for="name">Name</Label>
                        <Input 
                            className="form-control" 
                            id="name" 
                            onChange={this.onNameChange}
                            value={this.state.name}
                            />
                    </FormGroup>
                    <FormGroup>
                        <Label for="ip">IP-adress</Label>
                        <Input 
                            className="form-control"
                            id="ip"
                            onChange={this.onIpChange}
                            value={this.state.ip}
                            />
                    </FormGroup>
                      <Button type="submit" className="btn-success">Add</Button>
                </Form>
            </Col>
        )
    } 
}