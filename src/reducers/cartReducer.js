import { types } from "../type/types"

const initialState = {
  cart:[]
}

export const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.addCart:
            return {
              ...state,
              cart: addToCart(state.cart, action.payload)
            };

        case types.removeCart:
            return {
              ...state,
              cart: removeToCart(state.cart, action.payload)
            };
            case types.clearCart:
              return {
                ...state,
                ...initialState
              };
        default:
            return state;
    }
};

const addToCart = (cart, cartToAdd) => {
  const existingCart = cart.find(
    cart => cart.id === cartToAdd.id
  );

  if (existingCart) {
    return cart.map(cart =>
      cart.id === cartToAdd.id
        ? { ...cart, cantidad: cart.cantidad + 1 }
        : cart
    );
  }

  return [...cart, { ...cartToAdd, cantidad: 1 }];
};

const removeToCart = (cart, cartToRemove) => {
  const existingCartItem = cart.find(
    cart => cart.id === cartToRemove.id
  );

  if (existingCartItem) {
    return cart.map(cart =>
      cart.id === cartToRemove.id
        ? { ...cart, cantidad: cart.cantidad - 1 }
        : cart
    );
  }
};


