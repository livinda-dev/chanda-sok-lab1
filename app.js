// app.js
import express from 'express';


const app = express();

// Middleware
app.use(express.json());

// Helper function
function greet(name = "CI/C") {
  return `Hello ${name}!`;
}

// Routes
function rootHandler(req, res) {
  res.send(greet());
}

function helloHandler(req, res) {
  const name = req.query.name || "World";
  res.send(greet(name));
}

function sumHandler(req, res) {
  const { a, b } = req.body;
  if (typeof a !== 'number' || typeof b !== 'number') {
    return res.status(400).send({ error: "Invalid numbers" });
  }
  res.send({ result: a + b });
}

// Register routes
app.get('/', rootHandler);
app.get('/hello', helloHandler);
app.post('/sum', sumHandler);

export { rootHandler, helloHandler, sumHandler, greet };
export default app;
