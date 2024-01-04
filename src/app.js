const express = require('express');
const bodyParser = require('body-parser');
const eventRoutes = require('./routes/event-routes');
const { errorHandler } = require('./utils/error-handler');

const app = express();

app.use(bodyParser.json());

// Event routes
app.use('/events', eventRoutes);

app.use(errorHandler);

module.exports = app;