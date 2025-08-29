# BFHL REST API

A REST API that processes arrays and returns categorized data (numbers, alphabets, special characters) with metadata.

## 🚀 Features

- Categorizes array elements into:
  - Even numbers
  - Odd numbers  
  - Alphabets (uppercase)
  - Special characters
- Calculates sum of all numbers
- Creates concatenated string with alternating caps
- Always returns status 200 on valid requests
- Comprehensive error handling

## 📁 Project Structure

```
bajaj-oa-1/
├── src/
│   ├── index.js              # Main server file
│   ├── constants/
│   │   └── userConstants.js  # User metadata constants
│   ├── routes/
│   │   └── bfhl.js          # BFHL route handler
│   ├── services/
│   │   └── dataService.js   # Data processing logic
│   └── utils/
│       └── dataProcessor.js # Utility functions
├── .env                     # Environment variables
├── vercel.json             # Vercel deployment config
├── package.json
└── README.md
```

## 🛠️ Installation & Setup

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd bajaj-oa-1
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Update user constants**
   Edit `src/constants/userConstants.js` with your actual details:
   ```javascript
   const USER_CONSTANTS = {
       email: "your_email@domain.com",
       roll_number: "YOUR_ROLL_NUMBER", 
       user_id: "john_doe_17091999" // format: firstname_lastname_ddmmyyyy
   };
   ```

4. **Start the server**
   ```bash
   npm start
   # or for development
   npm run dev
   ```

5. **Server will run on:**
   - Local: `http://localhost:3000`
   - BFHL endpoint: `http://localhost:3000/bfhl`
   - Health check: `http://localhost:3000/health`

## 📡 API Endpoints

### POST /bfhl

**Request Body:**
```json
{
  "data": ["a", "1", "334", "4", "R", "$"]
}
```

**Response:**
```json
{
  "is_success": true,
  "user_id": "john_doe_17091999",
  "email": "john.doe@example.com",
  "roll_number": "ABCD123",
  "odd_numbers": ["1"],
  "even_numbers": ["334", "4"],
  "alphabets": ["A", "R"],
  "special_characters": ["$"],
  "sum": "339",
  "concat_string": "Ra"
}
```

### GET /health

Health check endpoint to verify server status.

## 🧪 Testing Examples

**Test with curl:**

```bash
# Example 1: Mixed data
curl -X POST http://localhost:3000/bfhl \
  -H "Content-Type: application/json" \
  -d '{"data": ["a", "1", "334", "4", "R", "$"]}'

# Example 2: Numbers only
curl -X POST http://localhost:3000/bfhl \
  -H "Content-Type: application/json" \
  -d '{"data": ["1", "2", "3", "4", "5"]}'

# Example 3: Empty array
curl -X POST http://localhost:3000/bfhl \
  -H "Content-Type: application/json" \
  -d '{"data": []}'
```

## 🚢 Deployment

### Vercel (Recommended)

1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow the prompts
4. Your API will be available at: `https://your-project.vercel.app/bfhl`

### Other Platforms

- **Railway**: Connect GitHub repo and deploy
- **Render**: Connect GitHub repo and deploy  
- **Heroku**: Use git deployment

## 🔧 Environment Variables

- `PORT`: Server port (default: 3000)
- `NODE_ENV`: Environment mode (development/production)

## 📋 Requirements Met

✅ Accepts POST request with array input  
✅ Processes and categorizes data  
✅ Returns metadata (status, user_id, email, roll_number)  
✅ Calculates sum of numbers (as string)  
✅ Creates concatenated string with alternating caps  
✅ Always returns status 200 on success  
✅ Proper error handling  
✅ Ready for deployment  

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes  
4. Push to the branch
5. Open a Pull Request
