const eventService = require('../services/event-service');

/**
 * Get all events.
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 * @returns {Promise<Response>} A promise of the response.
 */
exports.getAllEvents = async (req, res) => {
  try {
    const events = await eventService.getAllEvents();
    res.json(events);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

/**
 * Add or update an event.
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 * @returns {Promise<Response>} A promise of the response.
 */
exports.addOrUpdateEvent = async (req, res) => {
  try {
    const event = await eventService.addOrUpdateEvent(req.body);
    res.json(event);
  } catch (error) {
    res.status(500).send(error.message);
  }
};
