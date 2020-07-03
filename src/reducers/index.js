import { combineReducers } from 'redux';


const paginationReducer = (page = 1, action) => {
    switch(action.type) {
        case 'NEXT_PAGE':
            return action.payload;

        case 'PREV_PAGE':
            return action.payload;

        default:
            return page;
    }
}

const loadingReducer = (open = false, action) => {
    switch(action.type) {
        case 'LOADING':
            return action.payload;

        default:
            return open;
    }
}

const cartReducer = (cart = [], action) => {
    switch(action.type) {
        case 'ADD_PIZZA':
            return [...cart, action.payload];

        case 'REMOVE_PIZZA':
            // we will implement it after
            return cart;

        default:
            return cart;
    }
}

export default combineReducers({
    page: paginationReducer,
    cart: cartReducer,
    loading: loadingReducer
});