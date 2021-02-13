import React, {Component} from 'react';
import {Row, Col, Button, ButtonGroup} from 'reactstrap'


export default class IpItem extends Component {
    render() {

        const {name, ip} = this.props;

        return (
            <Row className="mb-1">
                <Col className="text-center alert-success">Name</Col>
                <Col className="text-center alert-success">IP</Col>
                <ButtonGroup>
                    <Button type="button" className="btn-primary"><i className="far fa-stop-circle"></i></Button>
                    <Button type="button" className="btn-secondary"><i className="fas fa-ellipsis-v"></i></Button>
                </ButtonGroup>
                <Button className="btn-danger ml-4"><i className="fas fa-trash"></i></Button>
            </Row>
        )
    }
}