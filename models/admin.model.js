"use strict";

const mongoose = require("mongoose");

// contact schema
const contactSchema = mongoose.Schema({
  name: String,
  email: String,
  project: String,
  Message: String,
});

// admin schema
const adminSchema = mongoose.Schema({
  email: String,
  feedback: [contactSchema],
});

const adminModel = mongoose.model("admin", adminSchema);

const adminSeed = () => {
  const admin = new adminModel({
    email: "ibrahem.omari96@gmail.com",
    feedback: [
      {
        name: "Test",
        userEmail: "Test",
        project: "Test",
        Message: "Test",
      },
    ],
  });

  admin.save();
//   console.log(admin);
};

// adminSeed();

module.exports=adminModel;