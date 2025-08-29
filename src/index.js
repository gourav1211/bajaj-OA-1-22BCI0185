const express = require('express');
const cors = require('cors');
require('dotenv').config();

const bfhlRoutes = require('./routes/bfhl');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true }));

// Error handling middleware for invalid JSON
app.use((err, req, res, next) => {
    if (err instanceof SyntaxError && err.status === 400 && 'body' in err) {
        return res.status(200).json({
            is_success: false,
            user_id: "error",
            email: "error",
            roll_number: "error",
            odd_numbers: [],
            even_numbers: [],
            alphabets: [],
            special_characters: [],
            sum: "0",
            concat_string: ""
        });
    }
    next();
});

// Health check endpoint
app.get('/health', (req, res) => {
    res.status(200).json({
        status: 'OK',
        message: 'Server is running',
        timestamp: new Date().toISOString()
    });
});

// Routes
app.use(bfhlRoutes);

// Handle 404 for undefined routes
app.use((req, res) => {
    res.status(404).json({
        error: 'Route not found',
        message: 'The requested endpoint/method does not exist'
    });
});

// Start server
app.listen(PORT, () => {
    console.log(`🚀 Server is running on port ${PORT}`);
    console.log(`📡 BFHL endpoint available at: http://localhost:${PORT}/bfhl`);
    console.log(`🔍 Health check available at: http://localhost:${PORT}/health`);
});
