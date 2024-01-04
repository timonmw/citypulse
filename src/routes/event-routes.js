import { Router } from 'express';
import { getAllEvents, addOrUpdateEvent } from '../controllers/event-controller';
const router = Router();

router.get('/', getAllEvents);
router.post('/', addOrUpdateEvent);

export default router;