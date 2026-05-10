// 1. Import the express module
const express = require("express");
const path = require("path");

// 2. Initialize the Express app
const app = express();

// 3. Define the port you want to run the server on
const PORT = 3000;

// 4. Use the built-in express.static middleware to serve the 'public' folder
// path.join() ensures the directory path is constructed correctly regardless of the operating system
app.use(express.static(path.join(__dirname, "public")));

// 5. Start the server and listen on the specified port
app.listen(PORT, () => {
  console.log(`Server is running!`);
  console.log(`Open your browser and visit: http://localhost:${PORT}`);
});
