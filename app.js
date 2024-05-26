const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('./middlewares/cors');
const cookieParser = require("cookie-parser");

const pagesRouter = require('./routes/pages');
const apiRouter = require('./routes/api');
const connectToDatabase = require('./database/connect');

const app = express();
const PORT = 3001;

connectToDatabase();

app.use(
  cors,
  cookieParser(),
  bodyParser.json(),
  pagesRouter,
  apiRouter,
  express.static(path.join(__dirname, 'public')),
);

app.listen(PORT);
