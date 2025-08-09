const express = require('express');
const app = express();
const connectDB = require('./config/dbconfig');

app.listen(8082, () => {
  console.log('Server is running on port 8082');
});



