export const openitemAdd = (id,title,rating,cost,img) => ({
    type : 'OIADD',
    item : {
        id    : id,
        title : title,
        rating: rating,
        cost  : cost,
        img   : img,
     }   
})