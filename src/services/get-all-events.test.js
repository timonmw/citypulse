import getAllEvents from './get-all-events.js';
import Event from '../models/event.js';
import { NotFoundError } from '../utils/error-handling.js';
import { jest } from '@jest/globals'

describe('getAllEvents', () => {

  it('should throw an error if no events are there', async () => {
    Event.find = jest.fn().mockResolvedValue([])
    await expect(getAllEvents()).rejects.toThrow(NotFoundError);
  });

  it('should return events', async () => {
    const newEventData = { title: 'New Event', description: 'Description', time: { start: '2024-05-20T18:00:00' } };
    Event.find = jest.fn().mockResolvedValue([newEventData])
    await expect(getAllEvents()).resolves.toEqual([newEventData]);
  });

});
