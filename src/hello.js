import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getPosts ,getSubjects} from './Actions/posts'

class hello extends Component {
  getData = () => {
    this.props.getPosts()
  };
  getSubjects=()=>{
    this.props.getSubjects()
  }
  render() {
    console.log(this.props.posts,'chenna')
    return (
      <div>
        <h1>Get posts <button onClick={this.getData}>POSTS</button></h1>
        <button onClick={this.getSubjects}>SUBJECTS</button>
      </div>
    )
  }
};
const mapStateToProps = state=>({
  posts:state.posts.manoj
})
const mapDispatchToProps = dispatch => ({
  getSubjects: () => dispatch(getSubjects()),
  getPosts: () => dispatch(getPosts())
})
export default connect(mapStateToProps, mapDispatchToProps)(hello)
