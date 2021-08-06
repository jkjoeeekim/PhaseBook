import { RECEIVE_POST, RECEIVE_POSTS } from '../actions/post_actions';
import { LOGOUT_CURRENT_USER } from '../actions/session_actions';

let _nullPost = {};

export default (state = {}, action) => {
  Object.freeze(state);
  let nextState = Object.assign({}, state);
  switch (action.type) {
    case RECEIVE_POSTS:
      let posts = action.posts;
      posts.map((post) => {
        nextState[post.id] = post;
      });
      return nextState;
    case LOGOUT_CURRENT_USER:
      return _nullPost;
    default:
      return state;
  }
};