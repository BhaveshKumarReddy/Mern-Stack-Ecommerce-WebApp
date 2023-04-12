const router = require('express').Router();
let Accounts = require('../models/account.model');

router.route('/auth').post((req,res) => {  
    Accounts.findOne({email:req.body.email,password:req.body.password}).then((acc) => {
        if(acc===null){
          res.json(null);} 
        else{
          res.json(acc)};
      }).catch(err => res.status(400).json('Error: ' + err));
  });

router.route('/del').delete((req, res) => { 
    Accounts.deleteMany({password:"ab"})     
      .then(acc => res.json("Deleted s"))
      .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req,res) => {
  Accounts.findOne({email:req.body.email},{_id:0,__v:0,name:0,password:0}).then((acc) => {
   if(acc===null){
        const newAcc = new Accounts({  
        name : req.body.fullname, 
        email : req.body.email, 
        password : req.body.password,  
        orders : [],
        cart : [] 
    });
        newAcc.save().then(() => res.json(true)).catch(err => res.status(400).json('Error: ' + err));}
   else{
      res.json(false);}}).catch(err => console.log('Error in findOne: ' + err));
});

router.route('/fetch').post((req, res) => {
  Accounts.find({email:req.body.email,password:req.body.password}) 
    .then(acc => {
      res.json(acc[0].orders);  
    }) 
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/fetchCart').post((req, res) => {
  Accounts.find({email:req.body.email,password:req.body.password}) 
    .then(acc => {
      res.json(acc[0].cart);  
    }) 
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/addOrders').post((req,res) => {
    Accounts.findOne({email:req.body.email,password:req.body.password})
    .then(acc => { 
      acc.orders = [...acc.orders,...req.body.cart];
      acc.cart = [];
      acc.save()
        .then(() => res.json('order updated!'))     
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Acc not found'));
});

router.route('/addCart').post((req,res) => {
    Accounts.findOne({email:req.body.email,password:req.body.password})
    .then(acc => { 
      const ind = acc.cart.findIndex(item => item.id === req.body.id)
      if(ind<0){ 
        acc.cart = [...acc.cart,...req.body.item];
        acc.save()
           .then(() => res.json('cart updated!'))     
           .catch(err => res.status(400).json('Duplicate ' + err));
      }
      else{
        res.json("Duplicate found");
      }
    })
    .catch(err => res.status(400).json('Acc not found'));
});

router.route('/delItem').post((req,res) => {
  Accounts.findOne({email:req.body.email,password:req.body.password})
  .then(acc => { 
    const items = acc.cart;
    const ind = acc.cart.findIndex(item => item.id === req.body.id)
    if(ind >= 0){ 
      items.splice(ind,1)
    }
    acc.cart = [...items];
    acc.save()
      .then(() => res.json('cart updated!'))     
      .catch(err => res.status(400).json('Error: ' + err));
  })
  .catch(err => res.status(400).json('Acc not found'));
});

module.exports = router; 
  

//{
//        "email": "2nv3k",
//        "ord" : {
//                "id":"3",
//                "title":"SONY ZX110 Wireless Extra Bass Headphones",
//                "cost":35,
//                "rating":4,
//                "img":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdZOjVB7-VEgNtXt0onZyXIYHfMtlP_pYjMctkPwnRMsy_c5oxe4LQAcBPF5yylBz5lqA&usqp:CAU"
//        }   
//}