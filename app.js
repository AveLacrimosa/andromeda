require('dotenv').config();
const express = require('express');
const cors = require('cors');
const {errorHandler} = require('./middleware/errorMiddleware');
const connectDB = require('./config/db');
const port = process.env.PORT || 4000;

connectDB()

const app = express()

app.use(errorHandler)
app.listen(port, ()=> console.log(`server is running on port ${port}`))