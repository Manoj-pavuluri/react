import React, { Component } from 'react';
import ComponentB from './componentB';


export default class ComponentA extends Component {
  render() {
    return (
      <div>
       <ComponentB />
      </div>
    )
  }
}
