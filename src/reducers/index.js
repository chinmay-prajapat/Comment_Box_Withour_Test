import CommentReducer from "./CommentReducer";

import { combineReducers } from "redux";
export default combineReducers({
  comments: CommentReducer,
});
