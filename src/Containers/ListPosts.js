import React, { Component } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { Field, reduxForm, reset } from 'redux-form';
import { getPosts, savePost, deletePost } from './../Actions/PostActions';
import PostCard from './../Components/PostCard';
import './../App.css';

class App extends Component {

  componentWillMount() {
    this.props.getPosts();
  }

  renderPosts() {
    return _.map(this.props.posts, (post, key) => {
      return (
        <PostCard key={key}>
            <h3 className="card-title">{post.title}</h3>
            <p className="card-text">{post.body}</p>
            <button class-name="btn btn-danger" onClick={() => {this.props.deletePost(key)}}>Delete</button>
        </PostCard>
      )
    })
  };

  renderField(field) {
    return (
      <input className="field.class" type="text" {...field.input} placeholder={`Please enter a ${field.label}`}/>
    )
  };

  onSubmit(values) {
    this.props.savePost(values).then(this.props.dispatch(reset('NewPost')));
  };

  render() {
    const { handleSubmit } = this.props;
    return (
      <div>
        <div className="container">
          {this.renderPosts()}
        </div>
        <div className="navbar fixed-bottom">
          <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
            <Field
              name="title"
              component={this.renderField}
              label="title"
              class="footer-title"
            />
            <Field
              name="body"
              component={this.renderField}
              label="body"
              class="footer-body"
            />
            <button type="submit" className="btn footer-btn">Post</button>
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
