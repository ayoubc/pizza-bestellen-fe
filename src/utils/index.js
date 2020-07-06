export const actions = {
    LOADING: 'LOADING',
    NEXT_PAGE: 'NEXT_PAGE',
    PREV_PAGE: 'PREV_PAGE',
    ADD_PIZZA: 'ADD_PIZZA',
    REMOVE_PIZZA: 'REMOVE_PIZZA',
    INFO: 'INFO'
}

export const callToast = (action, payload, delay) => {
    setTimeout(() => {
        action(payload)
    }, delay * 1000);
} 

export const findById = (arr, item) => {
    for(let i=0;i<arr.length; i++) {
        if (arr[i].id === item.id) {
            return i;
        } 
    }
    return -1;
}


export const getTotalPrice = (array) => array.map(item => item.price * item.quantity).reduce((a, b) => a + b);