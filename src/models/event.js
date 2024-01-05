import { Schema, model } from 'mongoose';
import { v4 as uuidv4 } from 'uuid'

const eventSchema = new Schema({
  eventId: { type: String, unique: true, required: true, default: uuidv4() },
  title: { type: String, required: true },
  description: { type: String, required: true },
  location: {
    address: { type: String, required: false },
    geo: {
      lat: { type: Number, required: false },
      long: { type: Number, required: false }
    }
  },
  time: {
    start: { type: Date, required: false },
    end: { type: Date, required: false },
    recurrence: {
      type: { type: String, enum: ['none', 'daily', 'weekly', 'monthly'], default: 'none' },
      interval: { type: Number, required: false },
      daysOfWeek: [{ type: Number, required: false }],
      endRecurrence: { type: Date, required: false }
    }
  },
  category: { type: String, required: false },
  source: {
    type: { type: String, enum: ['api', 'manual', 'crawl'], required: false },
    name: { type: String, required: false }
  },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

export default model('Event', eventSchema);