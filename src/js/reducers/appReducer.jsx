
const initialState = {
  categories: [],
  items: []
};

export default (state={...initialState}, action) => {
  switch(action.type) {
  case 'ADD_TO_CART':
    return {
      ...state,
      items: [...state.items, action.item]
    };
  case 'SAVE_CATEGORIES':
    return {
      ...state,
      categories: action.categories
    };
  default: 
    return state;
  }
};