import http from 'http';

// Create a server
const server = http.createServer((req, res) => {
    res.writeHead(200, {'content-type': 'text/html'});   
    res.write('Hello Hamza!');
    res.end();
})

// Assign a PORT and start the server
const PORT = 8080;
server.listen(PORT, () => {
    console.log(`Server started on http://localhost:${PORT}`);
})