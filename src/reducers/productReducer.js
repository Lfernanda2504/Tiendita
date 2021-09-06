const initialState = {
    allProduct:[],
}

export const productReducer = (state = initialState, action) =>{
    switch (action.type) {
        case 'getProduct':
            return {...state, allProduct:action.payload}  
        default:
            return state
    }
}