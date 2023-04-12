const express = require('express');
const cors = require('cors');
const { createProxyMiddleware } = require('http-proxy-middleware');
const mongoose = require('mongoose');
const path = require('path');
require('dotenv').config();

const app = express();  
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb+srv://bhavesh:passwordecom01@ecommerceacc.ilmxs.mongodb.net/ItemsLists?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true}).then(()=> console.log(" Successfully running on 5000")).catch(error => console.log("Failed to connect",error));

const addAcc = require('./routes/addAcc'); 
const addItem = require('./routes/addItem'); 

/*if(process.env.NODE_ENV === "production"){ 
    app.use(express.static("client/build"));
    app.get('/*',function(req,res){
        res.sendFile(path.join(__dirname,"client/build/index.html"))
    })
}*/
  
app.use('/ecom', addAcc);  
app.use('/item', addItem); 

app.listen(PORT, () => {
    console.log(); 
});  