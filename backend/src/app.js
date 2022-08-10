import app from "./config/express";
const path = require('path')
import express from 'express';
app.use('/uploads', express.static(path.join(__dirname, 'uploads')))

export default app;