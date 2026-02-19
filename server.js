const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

// Serve static files (index.html)
app.use(express.static(__dirname));

// Log every visitor
app.use((req, res, next) => {
    console.log(`🌍 Visitor: ${req.ip} | ${req.method} ${req.url}`);
    next();
});

// YES button route
app.get('/yes', (req, res) => {
    console.log(`😈 YES clicked by ${req.ip}`);
    res.sendStatus(200);
});

// NO button route
app.get('/no', (req, res) => {
    console.log(`🤡 NO clicked by ${req.ip}`);
    res.sendStatus(200);
});

// Start server
app.listen(port, '0.0.0.0', () => {
    console.log(`🔥 Server running on port ${port}`);
    console.log(`🌐 Open: http://YOUR-IP:${port}`);
});

