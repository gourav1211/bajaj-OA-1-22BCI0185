// Simple test file to verify our data processing logic
const { processData } = require('./src/services/dataService');

// Test cases from the plan
const testCases = [
    {
        name: "Example from plan",
        input: ["a", "1", "334", "4", "R", "$"],
        expected: {
            odd_numbers: ["1"],
            even_numbers: ["334", "4"],
            alphabets: ["A", "R"],
            special_characters: ["$"],
            sum: "339"
        }
    },
    {
        name: "Numbers only",
        input: ["1", "2", "3", "4", "5"],
        expected: {
            odd_numbers: ["1", "3", "5"],
            even_numbers: ["2", "4"],
            alphabets: [],
            special_characters: [],
            sum: "15"
        }
    },
    {
        name: "Alphabets only",
        input: ["a", "b", "c"],
        expected: {
            odd_numbers: [],
            even_numbers: [],
            alphabets: ["A", "B", "C"],
            special_characters: [],
            sum: "0"
        }
    },
    {
        name: "Empty array",
        input: [],
        expected: {
            odd_numbers: [],
            even_numbers: [],
            alphabets: [],
            special_characters: [],
            sum: "0"
        }
    }
];

console.log("🧪 Running tests for data processing logic...\n");

testCases.forEach((testCase, index) => {
    try {
        console.log(`Test ${index + 1}: ${testCase.name}`);
        console.log(`Input: [${testCase.input.map(i => `"${i}"`).join(", ")}]`);
        
        const result = processData(testCase.input);
        
        console.log("Result:", JSON.stringify(result, null, 2));
        
        // Basic validation
        const isValid = 
            result.sum === testCase.expected.sum &&
            result.odd_numbers.length === testCase.expected.odd_numbers.length &&
            result.even_numbers.length === testCase.expected.even_numbers.length &&
            result.alphabets.length === testCase.expected.alphabets.length &&
            result.special_characters.length === testCase.expected.special_characters.length;
        
        console.log(`✅ Test ${isValid ? 'PASSED' : 'FAILED'}\n`);
        
    } catch (error) {
        console.log(`❌ Test FAILED with error: ${error.message}\n`);
    }
});

console.log("🎯 Test complete!");
