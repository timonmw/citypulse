import { Router } from 'express';
import { getAllEvents, addOrUpdateEvent } from '../controllers/event-controller.js';
const router = Router();

router.get('/', getAllEvents);
router.post('/', addOrUpdateEvent);

export default router;