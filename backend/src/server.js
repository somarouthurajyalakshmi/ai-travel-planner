require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const authRoutes = require('./routes/auth');

const app = express();
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("✅ MongoDB Connected Successfully"))
    .catch((err) => {
        console.error("❌ MongoDB Connection Failed:", err.message);
        process.exit(1);
    });

// Routes
app.use('/api/auth', authRoutes);

// Test route
app.get('/', (req, res) => {
    res.json({ message: "AI Travel Planner Backend is running!" });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
});