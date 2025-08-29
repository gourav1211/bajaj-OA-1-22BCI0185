const express = require('express');
const { processData } = require('../services/dataService');
const USER_CONSTANTS = require('../constants/userConstants');

const router = express.Router();

/**
 * POST /bfhl endpoint
 * Processes input data and returns categorized response
 */
router.post('/bfhl', (req, res) => {
    try {
        // Input validation
        const { data } = req.body;
        
        if (!data || !Array.isArray(data)) {
            return res.status(200).json({
                is_success: false,
                user_id: USER_CONSTANTS.user_id,
                email: USER_CONSTANTS.email,
                roll_number: USER_CONSTANTS.roll_number,
                odd_numbers: [],
                even_numbers: [],
                alphabets: [],
                special_characters: [],
                sum: "0",
                concat_string: ""
            });
        }

        // Process the data
        const processedData = processData(data);

        // Construct successful response
        const response = {
            is_success: true,
            user_id: USER_CONSTANTS.user_id,
            email: USER_CONSTANTS.email,
            roll_number: USER_CONSTANTS.roll_number,
            ...processedData
        };

        res.status(200).json(response);

    } catch (error) {
        console.error('Error processing request:', error);
        
        // Return error response with status 200 as per requirements
        res.status(200).json({
            is_success: false,
            user_id: USER_CONSTANTS.user_id,
            email: USER_CONSTANTS.email,
            roll_number: USER_CONSTANTS.roll_number,
            odd_numbers: [],
            even_numbers: [],
            alphabets: [],
            special_characters: [],
            sum: "0",
            concat_string: ""
        });
    }
});

module.exports = router;
