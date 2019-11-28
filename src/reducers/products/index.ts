import { combineReducers } from "@reduxjs/toolkit";
import details from "./details";
import list from "./list";

export default combineReducers({
  list,
  details
});
