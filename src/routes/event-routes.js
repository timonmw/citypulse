import express from 'express';
import { handleGetAllEvents, handleAddOrUpdateEvent } from '../controllers/event-controller.js';

const router = express.Router();

router.get('/', handleGetAllEvents);
router.post('/', handleAddOrUpdateEvent);

export default router;