import getAllEvents from '../services/get-all-events.js';
import addOrUpdateEvent from '../services/add-or-update-event.js';

/**
 * Get all events.
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 * @param {Object} next - Express next handler
 * @returns {Promise<Response>} A promise of the response.
 */
export async function handleGetAllEvents(req, res, next) {
    try {
        const events = await getAllEvents();
        res.json(events);
    } catch (err) {
        next(err)
    }
}
/**
 * Add or update an event.
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 * @param {Object} next - Express next handler
 * @returns {Promise<Response>} A promise of the response.
 */
export async function handleAddOrUpdateEvent(req, res, next) {
    try {
        const event = await addOrUpdateEvent(req.body);
        res.json(event);
    } catch (err) {
        next(err)
    }
}
