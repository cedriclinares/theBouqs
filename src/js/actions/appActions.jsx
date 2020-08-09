
export const SaveCategories = categories => {
  return {
    type: 'SAVE_CATEGORIES',
    categories
  };
};

export const AddItemToCart = item => {
  return {
    type: 'ADD_TO_CART',
    item
  };
};