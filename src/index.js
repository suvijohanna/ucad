import express from 'express';
import path from 'path';
import {fileURLToPath} from 'url';
import { getItemsById } from './items';

const hostname = '127.0.0.1';
const app = express();
const port = 3000;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.json());
app.use('/docs', express.static(path.join(__dirname, '../docs')));

app.get('/', (req, res) => {
  res.send('Welcome to my REST API!');
});

// dummy example
app.get('/kukkuu', (request, response) => {
  const myResponse = {message: "Moi"};
  // response.json(myResponse);
  response.sendStatus(200);
});

// example generic items api

// get all items
app.get('/api/items', getItems);

// get items by id
app.get('/api/items/:id', getItemsById);

// modify
app.put('/api/items');

//add new item
app.post('/api/items', postItem);

//remove existing item
app.delete('/api/items');

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});