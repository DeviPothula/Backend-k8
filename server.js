const express = require('express');
const app = express();
const PORT = 5000;
const cors = require("cors");
// Static user data
const users = [
    { name: "Devi" },
    { name: "Sony" },
    { name: "Hema" }
];
const corsOptions = {
    origin: '*', // Allow all origins (for testing only)
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
  };
  
  app.use(cors(corsOptions));
// Route to handle API request
app.get('/api/data', (req, res) => {
    console.log('API IS CALLED')
    res.json(users);
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
