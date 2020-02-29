import React, { Component } from "react";
import "./Post.css";

class Post extends Component {
  state = {};
  render() {
    return (
      <div className="singlePost">
        <h3>{this.props.title}</h3>
        <p style={{ marginLeft: "1%" }}>{this.props.body}</p>
      </div>
    );
  }
}

export default Post;
