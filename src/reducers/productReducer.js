import { types } from "../type/types"

const initialState = {
    products: [],
}

export const productReducer = (state = initialState, action) =>{
    switch (action.type) {
        case types.addProduct:
            return[
                ...state,
            action.product
        ];
        case types.removeProduct:
            return state.filter(({id})=> id !== action.id);

        case types.editProduct:
            return state.map((product) =>{
                if (product.id === action.id) {
                    return {
                        ...product,
                        ...action.updates
                    };
                    
                } else {
                    return product;
                }
            });
            
            case types.GET_PRODUCTS:
                return {
                    ...state, 
                    products:[...action.products]
                };
            default:
                    return state;
        }
    };
              
              export const selectedProductsReducer = (state = {}, action) => {
               
                switch (action.type) {
                  case types.SELECT_PRODUCT:
                    return { ...state, ...action.products };
                  case types.REMOVE_SELECTED_PRODUCT:
                    return {};
                  default:
                    return state;
                }
              };
   