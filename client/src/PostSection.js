import React, { Component } from "react";

class PostSection extends Component {
  state = { posts: [] };

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

  /* Delete all the posts from the page and the database */
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
        <div>
          <h2>Posts</h2>
          {this.showPosts(this.state.posts)}
        </div>
        <button onClick={this.deletePosts}>Delete All</button>
      </div>
    );
  }
}

export default PostSection;
