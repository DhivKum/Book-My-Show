const express = require('express');
const app = express();
const connectDB = require('./config/dbconfig');
const userRoutes = require('./routes/userRoutes');
// const cors = require('cors');
// app.use(cors({
//   origin: '*',
// }));
app.use(express.json());
app.use("/api/users", userRoutes);

app.listen(8082, () => {
  console.log('Server is running on port 8082');
});



