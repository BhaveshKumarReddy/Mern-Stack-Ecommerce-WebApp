import items from '../ItemsTot';
export const initialState = {
    sar : [],
}
const searchReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SEARCH':
            const ser = [];
            for(var itm of items)
            {
                var temp = itm.title.toLowerCase();
                if(action.str.trim()!=="" && temp.includes(action.str.trim().toLowerCase()))
                {
                    ser.push(itm);
                }
            };
            return {
                ...state,
                sar : [...ser],
            }
            break;
        default:
            return state;
    }
}
export default searchReducer; 