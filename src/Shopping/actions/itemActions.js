import { ADD_ITEM, REMOVE_ITEM, CLEAR_ITEMS } from "../constants/itemConstants";

export function addItem(item) {
  return {
    type: ADD_ITEM,
    item
  };
}

export function removeItem(item) {
  return {
    type: REMOVE_ITEM,
    item
  };
}

export function clearItems() {
  return {
    type: CLEAR_ITEMS
  };
}
