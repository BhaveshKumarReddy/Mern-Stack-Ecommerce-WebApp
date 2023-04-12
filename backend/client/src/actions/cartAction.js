export const cartAdd = (items) => ({
    type : 'Add',
    items : items,
})

export const cartDel = (id) => ({
    type : 'Del',
    item : { 
        id    : id,
    }                                               
})

export const cartOrd = (orders) => ({
    type : 'AdORD',
    ord : orders,
})

export const cartEmpty = () => ({
    type : 'DelCart'
})