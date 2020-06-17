import { combineReducers } from "redux";
import authReducer from './AuthReducer';
import groupsReducer from './GroupsReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  groups: groupsReducer
})

export default rootReducer
