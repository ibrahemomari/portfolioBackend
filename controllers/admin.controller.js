"use strict";
const axios = require("axios");
const { find } = require("../models/admin.model");
const adminModel = require("../models/admin.model");

// Endpoint for testing
const home = (req, res) => {
  res.send("the server is running");
};


// Endpoint to creat new contact
const createContact=(req,res)=>{
    const email=req.query.email;
    const { name,userEmail,project,message}=req.body;
    
    adminModel.findOne({email:email},(err,data)=>{
        if(err){
            res.send('somthimg wrong please try agin later',err);
        }else{
            const dataBody={
                name:name,
                userEmail:userEmail,
                project:project,
                message:message
            };
            data.feedback.push(dataBody);
            data.save();
            res.send(data);
        }
    });
}

// Endpoint to retrive contact list
const getAdminData=(req,res)=>{
    const email=req.query.email;
    adminModel.findOne({email:email},(err,data)=>{
        console.log(data);
        if(err){
            res.send('somthimg wrong please try agin later',err);
        }else{
            res.send(data);
        }
    });
}
module.exports = {
  home,
  createContact,
  getAdminData
};