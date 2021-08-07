import React from 'react';
import Post from './post';
import PostRightAside from './post_right_aside';
import PostLeftAside from './post_left_aside';
import NewPostForm from './new_post_form';
import PostNavBar from './post_nav_bar';
import { Link } from 'react-router-dom';

export default class PostIndex extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: this.props.posts,
      users: this.props.users,
    };

    this.logoutUser = this.logoutUser.bind(this);
    this.displayPostForm = this.displayPostForm.bind(this);
  }

  componentDidMount() {
    let props = this.props;
    this.setState({ users: props.fetchUsers() });
    this.setState({ posts: props.fetchPosts() });
  }

  displayPostForm(e) {
    e.preventDefault();
    document.getElementById("new-post-form-wrapper").classList.add('enabled');
    document.getElementById("empty-space").onclick = this.hidePostForm;
    document.getElementById("new-post-form").classList.add('enabled');
  }

  hidePostForm(e) {
    e.preventDefault();
    document.getElementById("new-post-form-wrapper").classList.remove('enabled');
    document.getElementById("new-post-form").classList.remove('enabled');
  }

  logoutUser() {
    this.props.logout();
  }

  render() {
    let allPosts = [];
    let user;

    let users = this.props.users;
    if (Object.values(this.props.posts).length > 1) {
      let posts = Object.values(this.props.posts).reverse();
      posts.forEach((post, idx) => {
        if (this.props.friends.includes(post.authorId)) {
          allPosts.push(
            <Post post={post} key={idx} idx={idx} user={users[post.authorId]} currentUser={this.props.user} />
          );
        }
      });
    }
    if (this.props.user) {
      user = (
        <section id="post-section-user-controls" >
          <input onClick={this.displayPostForm} className="input-create-post" type="text" defaultValue={`What's on your mind, ${this.props.user.firstName}?`} ></input>
          <div className="createLine"></div>
          <button onClick={this.displayPostForm} >Photo</button>
        </section>
      );
    }

    return (
      <div>
        <PostNavBar user={this.props.user} logout={this.props.logout} />
        <PostRightAside users={this.props.users} friends={this.props.friends} />
        <div className="spacer"></div>
        <div id="new-post-form-wrapper">
          <div id="empty-space"></div>
          <NewPostForm user={this.props.user} />
        </div>
        {user}
        <section id="post-section-all-posts">
          {allPosts}
        </section>
        <div className="spacer"></div>
      </div>
    );
  }
}
