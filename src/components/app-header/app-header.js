import React, {Component} from 'react';
import {Container, Row, Col} from 'reactstrap'


export default class AppHeader extends Component {
    render() {
        return (
            <Container className="mt-4">
                <Row>
                    <Col className="text-center">
                        <h1>Ping monitoring!</h1>
                    </Col>
                </Row>
            </Container>
        );
    }
}