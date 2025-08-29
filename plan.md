

## Project: Full Stack REST API

### Objective

Build and host a REST API that:

* Accepts a POST request with an array as input.
* Processes the array and returns categorized data (even, odd, alphabets, special characters).
* Returns metadata (status, user\_id, email, roll number, sum, concatenated string).
* Must follow specified response format and always return status 200 on success.

---

## Step 1: Project Setup

* Initialize project:

  * **Node.js + Express** (preferred for REST API).
  * Create `package.json`.
  * Install dependencies: `express`, `body-parser` (if needed), `cors`.
* Create main file: `index.js`.

---

## Step 2: Define Constants

* User metadata to always return:

  ```json
  "email": "your_email@domain.com",
  "roll_number": "YOUR_ROLL_NUMBER",
  "user_id": "full_name_ddmmyyyy"
  ```
* Full name in lowercase, underscores between words.
* Example: `"john_doe_17091999"`

---

## Step 3: API Endpoint

* Route: `/bfhl`
* Method: `POST`
* Expected request body:

  ```json
  {
    "data": ["a", "1", "334", "4", "R", "$"]
  }
  ```

---

## Step 4: Core Logic Modules

### 4.1 Input Validation

* Check if `data` exists and is an array.
* Handle exceptions gracefully with `is_success: false`.

### 4.2 Data Processing

1. **Identify Numbers**

   * Check if string is numeric.
   * Separate into odd/even arrays (as strings).
   * Maintain sum of numbers (return as string).
2. **Identify Alphabets**

   * If alphabetic string → push to `alphabets` array (convert to uppercase).
   * For concatenation string:

     * Take all alphabets.
     * Concatenate in reverse order.
     * Apply alternating caps (first uppercase, second lowercase, third uppercase, etc.).
3. **Identify Special Characters**

   * If not number and not alphabet → push to `special_characters`.

### 4.3 Construct Response

* Always return:

  ```json
  {
    "is_success": true/false,
    "user_id": "...",
    "email": "...",
    "roll_number": "...",
    "odd_numbers": [],
    "even_numbers": [],
    "alphabets": [],
    "special_characters": [],
    "sum": "0",
    "concat_string": ""
  }
  ```

---

## Step 5: Server Setup

* Create Express server.
* Middleware for JSON parsing.
* Add error handling (invalid JSON, wrong structure).
* Always return `200` for valid POST requests.

---

## Step 6: Deployment

* Host API on **Vercel / Railway / Render / Heroku**.
* Ensure route is accessible at:

  ```
  https://<your-app-url>/bfhl
  ```
* Push code to **public GitHub repository**.

---

## Step 7: Testing

* Test with example inputs:

  * Numbers only.
  * Alphabets only.
  * Mixed array.
  * Edge cases (empty array, invalid entries).
* Verify sum is string.
* Verify alternating caps string matches requirements.

---

## Step 8: Deliverables

1. Hosted API endpoint with `/bfhl`.
2. Public GitHub repository link.
3. Submit endpoint in provided form.

---

<!-- ✅ With this plan, Copilot can scaffold:

* `index.js` with Express boilerplate.
* Route `/bfhl` handler.
* Utility functions: `isNumeric()`, `isAlphabet()`, `formatConcatString()`.
* Deployment configs (`vercel.json` / `Procfile` if needed). -->

---
