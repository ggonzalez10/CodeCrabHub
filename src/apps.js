const express = require('express');
const userRoutes = require('./routes/userRoutes');
const errorMiddleware = require('./middlewares/errorMiddleware');

const app = express();

app.use(express.json());

// Mount user routes
app.use('/api/users', userRoutes);

// Centralized error handler
app.use(errorMiddleware);

module.exports = app;
