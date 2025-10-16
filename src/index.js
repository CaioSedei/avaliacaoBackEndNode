import express from 'express';
import router from './routes/rotas.js';

const app = express();
app.use(express.json());

//routes
app.use('/api', router);

//server
const port = 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});