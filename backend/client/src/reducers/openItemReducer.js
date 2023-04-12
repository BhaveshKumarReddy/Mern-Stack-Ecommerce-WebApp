export const initialState = {
    item : {
    }
}
const openItemReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'OIADD':  
            return {
                ...state,
                item : {
                    id    : action.item.id,
                    title : action.item.title,
                    rating: action.item.rating,
                    cost  : action.item.cost,
                    img   : action.item.img,
                }
            }
            break;  
        default:  
            return state;  
    }
}
export default openItemReducer;