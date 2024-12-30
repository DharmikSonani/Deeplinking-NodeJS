const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

// Serve .well-known/assetlinks.json
// app.use('/.well-known', express.static(path.join(__dirname, '.well-known')));

// Default route
app.get('/', (req, res) => {
    res.send('Welcome to the Node.js server for App Links!');
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
