import { combineReducers, compose } from 'redux';


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

export default combineReducers({
    page: paginationReducer
});