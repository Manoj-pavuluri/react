import React, { Component } from 'react'
import PostsContexts from '../context';

export default class ComponentC extends Component {
  render() {
    console.log(this.context)
    return (
      <div>
        hello world {this.context}
      </div>
    )
  }
}


ComponentC.contextType = PostsContexts;