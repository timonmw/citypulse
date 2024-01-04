import { getAllEvents, addOrUpdateEvent } from '../services/event-service';

/**
 * Get all events.
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 * @returns {Promise<Response>} A promise of the response.
 */
export async function getAllEvents(req, res) {
    const events = await getAllEvents();
    res.json(events);
}

/**
 * Add or update an event.
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 * @returns {Promise<Response>} A promise of the response.
 */
export async function addOrUpdateEvent(req, res) {
    const event = await addOrUpdateEvent(req.body);
    res.json(event);
}
