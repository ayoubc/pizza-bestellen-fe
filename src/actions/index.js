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
