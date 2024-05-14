import http from 'http';
import express from 'express';
import carsRouter from './routes/car.routes';


const port = 3000;
const app = express();

app.get('/', (req, res) => {
  res.status(200).json({
    message : 'Hello World!'});
});

app.use('/cars', carsRouter);

const server = http.createServer(app);
server.listen(port, () => {
  console.log(`API Ruuning on port ${port}`);
});