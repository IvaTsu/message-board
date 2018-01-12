import React, { Component } from 'react';
import _ from 'lodash';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      posts: {
        'key0': {
          title: 'Title',
          body: 'Body'
        }
      }
    }
  };

  renderPosts() {
    return _.map(this.state.posts, (post, key) => {
      return (
        <div key={key}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </div>
      )
    })
  };

  render() {
    return (
      <div>
        {this.renderPosts()}
      </div>
    );
  }
}

export default App;
