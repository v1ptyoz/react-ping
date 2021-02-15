import React, {Component} from 'react';
import {Row, Col, Button, ButtonGroup} from 'reactstrap'


export default class IpItem extends Component {
    render() {
        const {id, name, ip, status, started, onDelete, onStart} = this.props;

        let classNames = 'text-center pt-1';
        let icon = 'far';
        let btnColor = '';


        if (started) {
            icon += ' fa-stop-circle';
            btnColor += ' btn-danger';
        } else {
            icon += ' fa-play-circle';
            btnColor += ' btn-info';
        }

        if (status) {
            classNames += ' alert-success';
        } else {
            classNames += ' alert-danger'
        }
        

        return (
            <Row key={id} className="mb-1">
                <Col className={classNames}>{name}</Col>
                <Col className={classNames}>{ip}</Col>
                <ButtonGroup>
                    <Button 
                        className={btnColor}
                        onClick={onStart}
                    >
                            <i className={icon}></i>
                    </Button>
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