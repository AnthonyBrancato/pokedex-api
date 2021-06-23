const app = require('../../app');
const http = require('http');

// Get port from environment and store in Express.
const port = process.env.APP_PORT || 9000;
app.set('port', port);

// Create HTTP server.
const server = http.createServer(app);
      server.listen(port, () => {
        console.log(`Server starts at http://localhost:${port}`);
      })