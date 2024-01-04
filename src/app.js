import express from 'express';
import { json } from 'body-parser';
import eventRoutes from './routes/event-routes.js';
import errorHandler from './utils/error-handling.js';

const app = express();

app.use(json());

// Event routes
app.use('/events', eventRoutes);

app.use(errorHandler);

export default app;