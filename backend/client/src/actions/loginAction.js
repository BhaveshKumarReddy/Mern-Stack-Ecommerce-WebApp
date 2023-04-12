export const logAdd = (email,password,name) => ({
    type : 'Addlog',
    user : {
        email : email, 
        password : password,
        name : name
    }
})

export const loginAdd = (bool) => ({
    type : 'logAdd',
    bol : bool
})  