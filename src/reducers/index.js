import { combineReducers } from 'redux'
import {
  RECEIVE_ITEM_DATA
} from "../actions";

export const selected = (state = {}, action) => {
  switch (action.type) {
    case "RECEIVE_ITEM_DATA":
      return Object.assign({}, state, action.selected);
    default:
      return state;
  }
};

export const items = (state = {}, action) => {
  switch (action.type) {
    case "RECEIVE_ITEM_DATA":
      return Object.assign({}, state, action.items);
    default:
      return state;
  }
};

export const images = (state = {}, action) => {
  switch (action.type) {
    case "RECEIVE_ITEM_DATA":
      return Object.assign({}, state, action.images);
    default:
      return state;
  }
};

export const siblingItems = (state = {}, action) => {
  switch (action.type) {
    case "RECEIVE_ITEM_DATA":
      return Object.assign({}, state, action.siblingItems);
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  selected,
  items,
  images,
  siblingItems
});

export default rootReducer;
