require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const counterRoutes = require('./routes/counterRoutes');

const app = express();
const PORT = process.env.PORT || 5001;

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors({
  origin: 'http://localhost:5173',  // Allow requests from your frontend
  credentials: true
}));

app.use(express.json());  // Parse JSON request bodies

// Routes
app.use('/api/counter', counterRoutes);

// Basic health check route
app.get('/', (req, res) => {
  res.json({ message: 'Counter API is running' });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});