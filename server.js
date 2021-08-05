'use strict';
const express=require('express');
const cors=require('cors');
const app=express();
const mongoose=require('mongoose');
require('dotenv').config();
app.use(express.json());
app.use(cors());
const port=process.env.port || 8000;
const {
    home,
    createContact,
    getAdminData
}=require('./controllers/admin.controller')

mongoose.connect(`mongodb://127.0.0.1:27017/finalexam`, 
                {useNewUrlParser: true, useUnifiedTopology:true});

app.get('/',home);

app.get('/getdata',getAdminData);

app.post('/createcontact',createContact);



app.listen(port, ()=>{
    console.log('listening to port 8000');
});