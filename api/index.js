const express = require('express');
const app = express();
const serverless = require('serverless-http'); // Add this package

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Your routes
const yourRoutes = require('../routes'); // Adjust as needed
app.use('/api', yourRoutes);

// Export for Vercel
module.exports = app;
module.exports.handler = serverless(app);
