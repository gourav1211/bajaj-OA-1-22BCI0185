/**
 * Check if a string represents a valid number
 * @param {string} str - The string to check
 * @returns {boolean} - True if string is numeric
 */
function isNumeric(str) {
    return !isNaN(str) && !isNaN(parseFloat(str)) && isFinite(str);
}

/**
 * Check if a string contains only alphabetic characters
 * @param {string} str - The string to check
 * @returns {boolean} - True if string contains only letters
 */
function isAlphabet(str) {
    return /^[a-zA-Z]+$/.test(str);
}

/**
 * Check if a number is even
 * @param {string|number} num - The number to check
 * @returns {boolean} - True if number is even
 */
function isEven(num) {
    return parseInt(num) % 2 === 0;
}

/**
 * Create concatenated string with alternating caps from alphabets
 * @param {Array} alphabets - Array of alphabet strings
 * @returns {string} - Formatted concatenated string
 */
function formatConcatString(alphabets) {
    if (alphabets.length === 0) return "";
    
    // Join all alphabets, reverse the string, then apply alternating caps
    const reversed = alphabets.join("").split("").reverse().join("");
    let result = "";
    
    for (let i = 0; i < reversed.length; i++) {
        if (i % 2 === 0) {
            result += reversed[i].toUpperCase();
        } else {
            result += reversed[i].toLowerCase();
        }
    }
    
    return result;
}

module.exports = {
    isNumeric,
    isAlphabet,
    isEven,
    formatConcatString
};
