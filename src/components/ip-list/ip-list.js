import React from 'react';
import {Row, Col, Container} from 'reactstrap'
import IpItem from '../ip-item';

const IpList = ({ipList, onDelete}) => {
    const elements = ipList.map((item) => {
        const {id} = item;
        return (
            <IpItem 
                {...item}
                onDelete={() => onDelete(id)}
                key = {id}
            />
        )      
});

    return (
        <Container>
            {elements}
        </Container>
    )
}

export default IpList;