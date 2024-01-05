import Event from '../models/event.js';
import { InputError } from '../utils/error-handling.js'

/**
 * adds or updates an existing event. The event is validated before
 * its upserted
 * @param {Object} eventData - The event data to validate.
 * @throws {InputError} If validation fails with all error messages.
 */
const addOrUpdateEvent = async (eventData) => {
  validateEventData(eventData)
  if (eventData.id) {
    if (!await Event.exists({ _id: eventData.id })) {
      throw new InputError("Ungültige id")
    }
    return Event.findByIdAndUpdate(eventData.id, eventData, { new: true });
  }
  let newEvent = new Event(eventData)
  let saved = await newEvent.save()
  return saved;
};

/**
 * Validates the event data and throws an error with all validation issues.
 * @param {Object} eventData - The event data to validate.
 * @throws {InputError} If validation fails with all error messages.
 */
function validateEventData(eventData) {
  let errors = [];

  if (!eventData.title) {
    errors.push('Titel ist erforderlich');
  }

  if (!eventData.description) {
    errors.push('Beschreibung ist erforderlich');
  }

  if (!eventData.time) {
    errors.push('Zeitinformation ist erforderlich');
  } else {
    const { start, end, recurrence } = eventData.time;
    if (!start && !recurrence) {
      errors.push('Startzeit oder Wiederholungsinformationen sind erforderlich');
    }

    if (recurrence) {
      if (!recurrence.type || !recurrence.daysOfWeek || recurrence.daysOfWeek.length === 0) {
        errors.push('Unvollständige Wiederholungsinformationen');
      }
    }

    if (start && end && new Date(start) >= new Date(end)) {
      errors.push('Endzeit muss nach der Startzeit liegen');
    }
  }

  if (errors.length > 0) {
    throw new InputError(`Validierungsfehler: ${errors.join('; ')}`);
  }
}

export default addOrUpdateEvent;