import React, {Component} from 'react';
import {Col} from 'reactstrap'


export default class infoLayer extends Component {
    render() {
        return (
            <Col className="text-center mt-5">
                <h3>Information:</h3>
                <h4>Errors: 0</h4>
                <h6>Total Devices: {this.props.counter}</h6>
            </Col>
        );
    }
}