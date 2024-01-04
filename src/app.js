import express from 'express';
import { json } from 'body-parser';
import eventRoutes from './routes/event-routes';
import errorHandler from './utils/error-handling';

const app = express();

app.use(json());

// Event routes
app.use('/events', eventRoutes);

app.use(errorHandler);

export default app;