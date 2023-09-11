const mongoose = require('mongoose');
const express = require('express');

const app = express();

const uri = "mongodb+srv://shivanibhatt2:India123@cluster0.bdt4998.mongodb.net/sample_airbnb?retryWrites=true&w=majority";

mongoose.connect(uri, {
  useNewUrlParser: true,
  useCreateIndex: true,

  useUnifiedTopology: true,
  useFindAndModify: false,
}).then(() => {
  console.log('Connected to MongoDB');
}).catch((err) => {
  console.error('Error connecting to MongoDB:', err);
});
