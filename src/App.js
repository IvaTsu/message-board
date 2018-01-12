import React, { Component } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { Field, reduxForm, reset } from 'redux-form';
import { getPosts, savePost, deletePost } from './Actions/PostActions';
import './App.css';

class App extends Component {

  componentWillMount() {
    this.props.getPosts();
  }

  renderPosts() {
    return _.map(this.props.posts, (post, key) => {
      return (
        <div key={key}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
          <button onClick={() => {this.props.deletePost(key)}}>Delete</button>
        </div>
      )
    })
  };

  renderField(field) {
    return (
      <input type="text" {...field.input} placeholder={`Please enter a ${field.label}`}/>
    )
  };

  onSubmit(values) {
    this.props.savePost(values).then(this.props.dispatch(reset('NewPost')));
  };

  render() {
    const { handleSubmit } = this.props;
    return (
      <div>
        <div>
          {this.renderPosts()}
        </div>
        <div>
          <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
            <Field
              name="title"
              component={this.renderField}
              label="title"
              class=""
            />
            <Field
              name="body"
              component={this.renderField}
              label="body"
              class=""
            />
            <button type="submit">Post</button>
          </form>
        </div>
      </div>
    );
  }
}

let form = reduxForm({
  form: 'NewPost'
})(App);

form = connect(state => ({
  posts: state.posts
}), { getPosts, savePost, deletePost })(form);

export default form;
