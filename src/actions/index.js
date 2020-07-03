export const loading = (isLoading) => {
    return {
        type: 'LOADING',
        payload: isLoading
    }
}

export const nextPage = (page) => {
    return {
        type: 'NEXT_PAGE',
        payload: page
    }
}

export const prevPage = (page) => {
    return {
        type: 'PREV_PAGE',
        payload: page
    }
}

export const addPizza = (pizza) => {
    return {
        type: 'ADD_PIZZA',
        payload: pizza
    }
}


