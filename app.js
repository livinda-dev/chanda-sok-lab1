import express from 'express';
const app = express();
app.get('/', (req, res) => {
  res.send('Hello CI/C!');
});
export default app;