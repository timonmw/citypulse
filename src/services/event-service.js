import Event from '../models/event';
import { NotFoundError } from '../utils/error-handling';

export async function getAllEvents() {
  const events = await Event.find({});
  if (!events) {
    throw new NotFoundError('Keine Events gefunden');
  }
  return events;
}

/**
 * Add or update an event.
 * @param {Object} eventData - Data for creating or updating an event.
 * @returns {Promise<Object>} A promise of the created or updated event.
 */
export async function addOrUpdateEvent(eventData) {
  if (eventData.id) {
    return Event.findByIdAndUpdate(eventData.id, eventData, { new: true });
  }
  const event = new Event(eventData);
  return event.save();
}
