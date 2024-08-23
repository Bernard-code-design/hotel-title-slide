const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

// Serving my static files from my "Piblic" directory
app.use(express.static(path.join(__dirname, 'public')));

// Routes to serve my main HTML file
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Starting my server
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});