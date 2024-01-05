import addOrUpdateEvent from './add-or-update-event.js';
import Event from '../models/event.js';
import { InputError } from '../utils/error-handling.js';
import { jest } from '@jest/globals'

describe('addOrUpdateEvent', () => {

  it('should throw an error if validation fails', async () => {
    const invalidEventData = { title: '', description: '' }; // Invalid event data
    await expect(addOrUpdateEvent(invalidEventData)).rejects.toThrow(InputError);
  });

  it('should add a new event if it does not exist', async () => {
    const newEventData = { title: 'New Event', description: 'Description', time: { start: '2024-05-20T18:00:00' } };
    const newEventDataAfterSave = { ...newEventData, id: 'abc' }
    jest.spyOn(Event.prototype, 'save')
      .mockImplementationOnce(() => Promise.resolve(newEventDataAfterSave))
    await expect(addOrUpdateEvent(newEventData)).resolves.toEqual(newEventDataAfterSave);
  });

  it('should update an existing event', async () => {
    const existingEventData = { id: '123', title: 'Existing Event', description: 'Description', time: { start: '2024-05-20T18:00:00' } };
    Event.exists = jest.fn().mockResolvedValue(true);
    Event.findByIdAndUpdate = jest.fn().mockResolvedValue(existingEventData);
    await expect(addOrUpdateEvent(existingEventData)).resolves.toEqual(existingEventData);
    expect(Event.findByIdAndUpdate).toHaveBeenCalledWith(existingEventData.id, existingEventData, { new: true });
  });

});
