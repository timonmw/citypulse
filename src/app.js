import express from 'express';
import eventRoutes from './routes/event-routes.js';
import { errorHandler } from './utils/error-handling.js';

const app = express();

app.use(express.json());

// Event routes
app.use('/events', eventRoutes);

app.use(errorHandler);

export default app;