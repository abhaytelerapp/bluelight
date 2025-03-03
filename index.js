const express = require('express');
const path = require( 'path');
const http = require( "http");

const app = express();
const server = http.createServer(app);
const PORT = 5000;

app.use(express.static('public')); // Serve static files from 'public' folder

// app.get('/', (req, res) => {
//   res.sendFile(path.join(__dirname, 'public/html/start.html'));
// });

function BluelightViewer() {
  console.log("Bluelight Viewer Initialized");
}

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

module.exports = BluelightViewer;