# Urban Dictionary’s Random Word App

This is a web application intended for people who would like to **learn English slang** in a casual and relaxed manner. UDRW provides users with a *random* slang word or phrase, its *definition* and *usage examples*.

## How Does It Work?
This application follows a Client-Server architecture designed to keep the frontend lightweight and the API keys secure:

- Request: When users click the "Get a new word!" button, the frontend sends a request to the dedicated Node.js proxy server rather than calling the Urban Dictionary API directly.
- Proxy: The server receives the request, attaches the hidden API key (stored securely in a .env file), and forwards the request to the official Urban Dictionary API.
- Response: Once the API responds, the server passes that data back to the frontend, which dynamically updates the page with a new slang word, its meaning, and an example.

## Tech Stack
- Frontend: HTML5, CSS3, and JavaScript
- Backend: Node.js and Express
  - Security: Uses dotenv to manage environment variables (secret API keys).
  - Efficiency: Utilizes needle for HTTP requests and cors to manage cross-origin resource sharing safely.
  - Integration: Uses the Urban Dictionary API to source random English slang content and the Twitter API to enable users to share their favorite finds promptly.
    
## Launching the Urban Dictionary’s Random Word App
To install and run Urban Dictionary’s Random Word, follow the steps below:
1. Install Visual Studio Code and Node.js.
2. Download the repository files (excluding package.json and package-lock.json).
3. Create an account on [Rapid API](https://rapidapi.com/) and subscribe to the [Urban Dictionary API](https://rapidapi.com/archergardinersheridan/api/urban-dictionary7). Copy your 'X-RapidAPI-Key' from the fetch code snippet in the Random Word endpoint.
4. Open the project folder in the VS Code terminal and run:
   ```
   npm init -y
   npm i express dotenv cors needle
   npm i -D nodemon
   ```
5. In package.json, replace the "scripts" section with:
   ```
   "scripts": {
   "start": "node index",
   "dev": "nodemon index"
   }
   ```
6. Create a .env file in the root directory and add:
      ```
      API_KEY_VALUE='your_secret_key'
      ```
7. Install the Live Server extension. Open index.html, click "Go Live", and explore modern English slang terms! :blush: 
