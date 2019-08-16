import { ADD_ITEM, REMOVE_ITEM, CLEAR_ITEMS } from "../constants/itemConstants";

const itemReducer = (state = { buyItems: ["milk", "bread", "fruits"], message: "" }, action) => {
  switch (action.type) {
    case ADD_ITEM:
      const newItem = action.item;
      const onList = state.buyItems.includes(newItem);
      if (onList) {
        state = {
          ...state,
          message: "item is on the list"
        };
      } else {
        state = { buyItems: [...state.buyItems, newItem], message: "" };
      }
      return state;

    case REMOVE_ITEM:
      state = {
        ...state,
        buyItems: state.buyItems.filter(buyItem => buyItem !== action.item)
      };

      if (state.buyItems.length === 0) {
        state = {
          ...state,
          message: "No items in the list. Add some!!!"
        };
      }
      return state;

    case CLEAR_ITEMS:
      state = {
        buyItems: [],
        message: "No items in the list. Add Some!!"
      };
      return state;
    default:
      return state;
  }
};

export default itemReducer;
