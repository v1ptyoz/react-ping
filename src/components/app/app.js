import React, {Component} from 'react';
import nextId from 'react-id-generator';
import AppHeader from '../app-header'

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        data : [ // mock data
            {name: 'Google', ip: '8.8.8.8', id: nextId()},
            {name: 'Yandex', ip: '87.250.250.242', id: nextId()},
            {name: 'Bad IP', ip: '1', id: nextId()}
        ],
    };
  }

  render() {
    return (
      <AppHeader/>
    )
  };


}