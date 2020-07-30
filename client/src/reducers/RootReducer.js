import { combineReducers } from "redux";
import authReducer from './AuthReducer';
import commentsReducer from './CommentsReducer';
import groupsReducer from './GroupsReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  groups: groupsReducer,
  comments: commentsReducer
})

export default rootReducer
