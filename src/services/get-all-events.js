import Event from '../models/event.js';

/**
 * Returns all events
 * @returns all found events
 * @throws {NotFoundError}
 */
const getAllEvents = async () => {
  const events = await Event.find({});
  if (!events) {
    throw new NotFoundError('Keine Events gefunden');
  }
  return events;
};

export default getAllEvents;