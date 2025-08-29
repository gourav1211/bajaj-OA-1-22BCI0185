const { isNumeric, isAlphabet, isEven, formatConcatString } = require('../utils/dataProcessor');

/**
 * Process the input data array and categorize elements
 * @param {Array} data - Input array of strings/numbers
 * @returns {Object} - Processed data with categorized arrays
 */
function processData(data) {
    const result = {
        odd_numbers: [],
        even_numbers: [],
        alphabets: [],
        special_characters: [],
        sum: "0",
        concat_string: ""
    };

    if (!Array.isArray(data)) {
        throw new Error("Input data must be an array");
    }

    let sum = 0;
    const alphabetArray = [];

    data.forEach(item => {
        const itemStr = String(item);

        if (isNumeric(itemStr)) {
            // It's a number
            const num = parseInt(itemStr);
            sum += num;
            
            if (isEven(num)) {
                result.even_numbers.push(itemStr);
            } else {
                result.odd_numbers.push(itemStr);
            }
        } else if (isAlphabet(itemStr)) {
            // It's an alphabet
            const upperCaseItem = itemStr.toUpperCase();
            result.alphabets.push(upperCaseItem);
            alphabetArray.push(itemStr);
        } else {
            // It's a special character
            result.special_characters.push(itemStr);
        }
    });

    // Set sum as string
    result.sum = sum.toString();

    // Create concatenated string with alternating caps
    result.concat_string = formatConcatString(alphabetArray);

    return result;
}

module.exports = { processData };
