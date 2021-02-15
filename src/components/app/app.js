import React, {Component} from 'react';
import nextId from 'react-id-generator';
import AppHeader from '../app-header'
import AddForm from '../add-form'
import InfoLayer from '../info-layer';
import IpList from '../ip-list';
import {Row, Container, Col} from 'reactstrap';
import Ping from 'ping.js';


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        data : [ // mock data
            {name: 'Google', ip: 'www.google.com', status: true, started: false, id: nextId()},
            {name: 'Yandex', ip: '87.250.250.242', status: true, started: false, id: nextId()},
            {name: 'Bad IP', ip: '12sadf3456', status: false, started: false, id: nextId()}
        ],
    };


    this.deleteItem = this.deleteItem.bind(this);
    this.addItem = this.addItem.bind(this);
    this.onStart = this.onStart.bind(this);

  };

  deleteItem(id) {
    this.setState(({data}) => {
        const index = data.findIndex((elem) => {
            return elem.id === id;
        })
        const before = data.slice(0, index);
        const after = data.slice(index + 1);

        const newArr = [...before, ...after];

        return {
            data: newArr
        }
    })
  }

  addItem(name, ip) {
    if (name && ip) {
      const newItem = {
          name: name,
          ip: ip,
          id: nextId(),
          status: false
      }

      this.setState(({data}) => {
        const newArr = [...data, newItem];
        return {
            data: newArr
        }
      })
    } else {
      return
    }
  }

  onStart(id) {
    this.setState(({data}) => {
      const index = data.findIndex(elem => elem.id === id);
      const old = data[index];
      const newItem = {...old, started: !old.started};

      const before = data.slice(0, index);
      const after = data.slice(index + 1);
      const newArr = [...before, newItem, ...after];
      return {
        data: newArr
      }
    })
  }
      
  render() {
    const {data} = this.state
    return (
      <Container className="mt-4">
        <Row>
          <AppHeader/>
        </Row>
        <Row>
          <AddForm onAdd = {this.addItem}/>
          <InfoLayer counter={this.state.data.length}/>
        </Row>
        <Row className="mb1">
            <Col className="text-center">Name</Col>
            <Col className="text-center mb-3">IP-address</Col>
            <IpList 
              ipList={data}
              onDelete={this.deleteItem}
              onStart={this.onStart}
            />
        </Row>
      </Container>
    )
  };


}