import { combineReducers } from 'redux';
import { actions, findById } from '../utils';

const paginationReducer = (page = 1, action) => {
    switch(action.type) {
        case actions.NEXT_PAGE:
            return action.payload + 1;

        case actions.PREV_PAGE:
            return action.payload - 1;

        default:
            return page;
    }
}

const toastReducer = (info = null, action) => {
    switch(action.type) {
        case actions.INFO:
            return action.payload;
        default:
            return info;
    }
}

const loadingReducer = (open = false, action) => {
    switch(action.type) {
        case actions.LOADING:
            return action.payload;

        default:
            return open;
    }
}

const cartReducer = (cart = [], action) => {
    let index;
    switch(action.type) {
        case actions.ADD_PIZZA:
            index = findById(cart, action.payload);
            if (index === -1) {
                return [...cart, action.payload];
            }
            else{
                cart[index] = action.payload;
                return [...cart];
            }

        case actions.REMOVE_PIZZA:
            index = findById(cart, action.payload);
            if (index === -1) {
                return cart;
            }
            else {
                cart[index].quantity--;
                if (cart[index].quantity === 0) {
                    return [...cart.slice(0, index).concat(cart.slice(index+1))];
                }
                return [...cart];
            }

        case actions.EMPTY_CART:
            return [];

        default:
            return cart;
    }
}

export default combineReducers({
    page: paginationReducer,
    cart: cartReducer,
    loading: loadingReducer,
    toastInfo: toastReducer
});