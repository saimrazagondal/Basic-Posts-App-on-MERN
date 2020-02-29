import React, { Component } from "react";
import axios from "axios";
import Post from "./Post";
import "./Form.css";

class Form extends Component {
  state = {
    title: "",
    body: "",
    posts: []
  };

  /*Form handling for both text fields
  Update state in real time */
  handleChange = event => {
    event.preventDefault();
    const target = event.target;
    const name = target.name;
    const value = target.value;

    this.setState({
      [name]: value
    });
  };

  /* Send data to the server
    Clear the fields and avoid page reload
  */
  submitForm = event => {
    event.preventDefault();
    const payload = {
      title: this.state.title,
      body: this.state.body
    };

    axios({
      url: "/save",
      method: "post",
      data: payload
    })
      .then(() => {
        console.log("data successfully sent to the server.");
      })
      .catch(() => {
        console.log("data not sent to the server.");
      });

    this.clearFields();
    this.getPosts();
  };

  /* After data has been sent clear the fields by resetting the state */
  clearFields = () => {
    this.setState({
      title: "",
      body: ""
    });
  };

  //take response of data from server and save it in state
  getPosts = () => {
    axios
      .get("/get")
      .then(response => {
        const data = response.data;
        this.setState({
          posts: data
        });
      })
      .catch(() => {
        console.log("error recieving data from server.");
      });
  };

  //update the state each time the component is mounted
  componentDidMount = () => {
    this.getPosts();
  };

  /* Display all the posts on the page */
  showPosts = posts => {
    let i = 0;
    return posts.map(post => {
      i = i + 1;
      return <Post key={i} title={post.title} body={post.body} />;
    });
  };

  /* Delete all the posts from */
  deletePosts = () => {
    axios
      .get("/delete")
      .then(response => {
        console.log(response.data);
        this.setState({ posts: [] });
        this.getPosts();
      })
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    return (
      <div>
        <center>
          <form onSubmit={this.submitForm}>
            <input
              className="textField"
              type="text"
              placeholder="Title"
              name="title"
              value={this.state.title}
              onChange={this.handleChange}
            />
            <input
              className="textField"
              type="text"
              placeholder="Body"
              name="body"
              value={this.state.body}
              onChange={this.handleChange}
            />
            <button type="submit" className="submitButton">
              Submit
            </button>
          </form>
        </center>
        <div>
          <div className="section">
            <h2 className="postsHeading">Posts</h2>
            <button onClick={this.deletePosts} className="deleteButton">
              Delete All
            </button>
          </div>
          {this.showPosts(this.state.posts)}
        </div>
      </div>
    );
  }
}

export default Form;
