import React, {Component} from 'react';
import {Row, Col, Button, ButtonGroup} from 'reactstrap'


export default class IpItem extends Component {
    render() {
        const {id, name, ip, onDelete} = this.props;

        let classNames = 'text-center pt-1';
        

        return (
            <Row key={id} className="mb-1">
                <Col className={classNames + " alert-success"}>{name}</Col>
                <Col className={classNames + " alert-success"}>{ip}</Col>
                <ButtonGroup>
                    <Button className="btn-primary"><i className="far fa-stop-circle"></i></Button>
                    <Button className="btn-secondary"><i className="fas fa-ellipsis-v"></i></Button>
                </ButtonGroup>
                <Button 
                    className="btn-danger ml-4"
                    onClick={onDelete}
                    >
                        <i className="fas fa-trash"></i>
                </Button>
            </Row>
        )
    }
}