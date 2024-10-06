const express = require('express');

// In-memory product storage
let products = [];

// Request counters
let getCounter = 0;
let postCounter = 0;

// Create an Express app
const app = express();
const PORT = 5000;

// Middleware to parse JSON request bodies
app.use(express.json());

// Log incoming requests (method and path)
app.use((req, res, next) => {
    console.log(`> ${req.url} ${req.method}: received request`);
    next();
});

// GET /products - Return a list of all products
app.get('/products', (req, res) => {
    getCounter++;
    console.log(`Processed Request Count --> GET: ${getCounter}, POST: ${postCounter}`);
    res.json(products);
    console.log(`< /products GET: sending response`);
});

// POST /products - Add a new product
app.post('/products', (req, res) => {
    postCounter++;
    console.log(`Processed Request Count --> GET: ${getCounter}, POST: ${postCounter}`);
    const product = req.body;
    products.push(product);
    res.status(201).json({ message: 'Product added successfully' });
    console.log(`< /products POST: sending response`);
});

// DELETE /products - Delete all products
app.delete('/products', (req, res) => {
    products = [];
    res.json({ message: 'All products deleted successfully' });
    console.log(`< /products DELETE: sending response`);
});

// Handle invalid routes
app.use((req, res) => {
    res.status(404).json({ message: 'Route not found' });
    console.log(`< ${req.url} ${req.method}: route not found`);
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is listening at http://127.0.0.1:${PORT}`);
    console.log('Endpoints:');
    console.log(`http://127.0.0.1:${PORT}/products method: GET, POST, DELETE`);
});
