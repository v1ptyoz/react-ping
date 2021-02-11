import React, {Component} from 'react';
import {Col} from 'reactstrap'


export default class AppHeader extends Component {
    render() {
        return (
            <Col className="mb-5">
                <h1>Ping monitoring!</h1>
            </Col>
        );
    }
}