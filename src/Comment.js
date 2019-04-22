<<<<<<< HEAD
import React,{ Component } from 'react';

class Comment extends  Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className="comment">{this.props.commentText}</div>
        )
    }
}

export default Comment;
=======
import React, { Component } from 'react'
import BlogPost from './BlogPost.js'

class X extends Component{
  render() {
    <BlogPost/>
  }
}
// add Comment component here
>>>>>>> e4a9c567efbe481505fceb6c3835153e99bc31a0
