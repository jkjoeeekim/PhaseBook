import { combineReducers } from 'redux';
import UserReducer from './user_reducer';
import PostReducer from './post_reducer';
import CommentReducer from './comment_reducer';

export default combineReducers({
  users: UserReducer,
  posts: PostReducer,
  comments: CommentReducer,
});