require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const { uri, options } = require('./data/config/db.config');
const errorHandlerMiddleware = require('./api/middlewares/error-handler.middleware');
const routes = require('./api/routes/index');

const app = express();

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

mongoose
  .connect(uri, options)
  .then(() => {
    // eslint-disable-next-line no-console
    console.log('DB connected');
  })
  .catch((err) => {
    // eslint-disable-next-line no-console
    console.error('Unable to connect to the database:', err);
  });

routes(app);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 8000;

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(` Server runing ${port}`);
});
