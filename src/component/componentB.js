import React, { Component } from 'react';
import ComponentC from './componentC';



export default class ComponentB extends Component {
  render() {
    return (
      <div>
      <ComponentC />
      </div>
    )
  }
}
