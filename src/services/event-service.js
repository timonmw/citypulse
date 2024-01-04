const Event = require('../models/event');
const { NotFoundError } = require('../utils/error-handler');

exports.getAllEvents = async () => {
  const events = await Event.find({});
  if (!events) {
    throw new NotFoundError('Keine Events gefunden');
  }
  return events;
};

/**
 * Add or update an event.
 * @param {Object} eventData - Data for creating or updating an event.
 * @returns {Promise<Object>} A promise of the created or updated event.
 */
exports.addOrUpdateEvent = async (eventData) => {
  if (eventData.id) {
    return Event.findByIdAndUpdate(eventData.id, eventData, { new: true });
  }
  const event = new Event(eventData);
  return event.save();
};
