import getAllEvents from '../use-cases/get-all-events.js';
import addOrUpdateEvent from '../use-cases/add-or-update-event.js';

/**
 * Get all events.
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 * @returns {Promise<Response>} A promise of the response.
 */
export async function handleGetAllEvents(req, res) {
    const events = await getAllEvents();
    res.json(events);
}
/**
 * Add or update an event.
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 * @returns {Promise<Response>} A promise of the response.
 */
export async function handleAddOrUpdateEvent(req, res) {
    const event = await addOrUpdateEvent(req.body);
    res.json(event);
}
