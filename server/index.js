const express = require('express');
const app = express();
const connectDB = require('./config/dbconfig');
const userRoutes = require('./routes/userRoutes');
app.use(express.json());
app.use("/api/users", userRoutes);

app.listen(8082, () => {
  console.log('Server is running on port 8082');
});



