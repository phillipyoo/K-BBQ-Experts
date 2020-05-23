const express = require('express');
const connectDB = require('./config/db');

const app = express();

//connect Database
connectDB();

// Init Middleware
app.use(
  express.json({
    extended: false,
  })
);

app.get('/', (req, res) => res.send('API Running'));

// Define Routes
app.use('/users', require('./routes/users'));

// Define Port Number
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
