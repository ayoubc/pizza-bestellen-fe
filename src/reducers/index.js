import { combineReducers } from 'redux';
import { actions, findById } from '../utils';

const paginationReducer = (page = 1, action) => {
    switch(action.type) {
        case actions.NEXT_PAGE:
            return action.payload;

        case actions.PREV_PAGE:
            return action.payload;

        default:
            return page;
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
    const index = findById(cart, action.payload);
    switch(action.type) {
        case actions.ADD_PIZZA:
            if (index === -1) {
                return [...cart, action.payload];
            }
            else{
                cart[index] = action.payload;
                return [...cart];
            }

        case actions.REMOVE_PIZZA:
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

        default:
            return cart;
    }
}

export default combineReducers({
    page: paginationReducer,
    cart: cartReducer,
    loading: loadingReducer
});