import { actions } from '../utils';

export const loading = (isLoading) => {
    return {
        type: actions.LOADING,
        payload: isLoading
    }
}

export const inform = (info) => {
    return {
        type: actions.INFO,
        payload: info
    }
}

export const nextPage = (page) => {
    return {
        type: actions.NEXT_PAGE,
        payload: page
    }
}

export const prevPage = (page) => {
    return {
        type: actions.PREV_PAGE,
        payload: page
    }
}

export const addPizza = (pizza) => {
    return {
        type: actions.ADD_PIZZA,
        payload: pizza
    }
}

export const removePizza = (pizza) => {
    return {
        type: actions.REMOVE_PIZZA,
        payload: pizza
    }
}

export const emptyCart = () => {
    return {
        type: actions.EMPTY_CART
    }
} 