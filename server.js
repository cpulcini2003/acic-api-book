const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3200;

let books = [];

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/book', (req, res) => {
  const book = req.body;
  books.push(book);
  //console.log(book);
  res.json(book);
  //res.send('Book was added to the database');
  // res.json({
  //   number: 1
  // });
  //res.send('{"success" : "Updated Successfully"' & book.id & ', "status" : 200}');
});

app.get('/books', (req, res) => {
  res.json(books);
});

app.get('/', (req, res) => {
  res.send('Hello from the ACIC API!');
});

app.get('/health', (req, res) => {
  res.sendStatus(200);
});

app.get('/health', (req, res) => {
  res.sendStatus(200);
});

app.listen(port, () => {
  console.log(`app listening at http://localhost:${port}`);
});
