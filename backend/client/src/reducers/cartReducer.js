export const initialState = {
    items : [],
    orders : [],
    user : null, 
}
const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'Add':  
            return {
                ...state,
                items : [...action.items]
            }
            break;
        case 'AdORD': 
            return {
                ...state, 
                orders : [...action.ord],
            }                      
            break;
        case 'DelCart': 
            return {
                ...state, 
                items : [],
            }                      
            break;
        case 'Del':       
                const newItems = state.items
                const ind = state.items.findIndex(item => item.id === action.item.id)
                if(ind >= 0){ 
                    newItems.splice(ind,1)
                }else{

                }
            return {
                ...state,
                items : [...newItems]
            }
            break;
        default:
            return state;
    }
}
export default cartReducer; 