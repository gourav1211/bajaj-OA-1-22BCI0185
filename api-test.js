// API Test Script
const testApiEndpoint = async () => {
    try {
        console.log("🧪 Testing BFHL API Endpoint...\n");

        // Test data from the plan
        const testData = {
            data: ["a", "1", "334", "4", "R", "$"]
        };

        console.log("📤 Sending POST request to /bfhl");
        console.log("Request body:", JSON.stringify(testData, null, 2));

        const response = await fetch('http://localhost:3000/bfhl', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(testData)
        });

        console.log(`\n📥 Response Status: ${response.status}`);
        
        const result = await response.json();
        console.log("Response body:", JSON.stringify(result, null, 2));

        // Test health endpoint
        console.log("\n🔍 Testing Health endpoint...");
        const healthResponse = await fetch('http://localhost:3000/health');
        const healthResult = await healthResponse.json();
        console.log("Health Status:", healthResponse.status);
        console.log("Health Response:", JSON.stringify(healthResult, null, 2));

    } catch (error) {
        console.error("❌ Error testing API:", error.message);
    }
};

testApiEndpoint();
