export const actions = {
    LOADING: 'LOADING',
    NEXT_PAGE: 'NEXT_PAGE',
    PREV_PAGE: 'PREV_PAGE',
    ADD_PIZZA: 'ADD_PIZZA',
    REMOVE_PIZZA: 'REMOVE_PIZZA',
}

export const findById = (arr, item) => {
    for(let i=0;i<arr.length; i++) {
        if (arr[i].id === item.id) {
            return i;
        } 
    }
    return -1;
}


