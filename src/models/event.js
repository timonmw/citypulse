const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
      "eventId": "unique_event_id", // Eindeutige ID für das Event
      "title": "Event Title", // Titel des Events
      "description": "Event Description", // Beschreibung des Events
      "location": {
        "address": "Street, City, Country", // Adresse des Events
        "geo": {
          "lat": 52.5200, // Geografische Breite
          "long": 13.4050 // Geografische Länge
        }
      },
      "time": {
        "start": "2024-05-20T18:00:00", // Startzeit des Events
        "end": "2024-05-20T23:00:00", // Endzeit des Events
        "recurrence": {
          "type": "weekly", // Typ der Wiederholung (none, daily, weekly, monthly)
          "interval": 1, // Intervall der Wiederholung
          "daysOfWeek": [1, 5], // Tage der Woche, an denen das Event stattfindet (0=Sonntag, 6=Samstag)
          "endRecurrence": "2024-12-31" // Datum, an dem die Wiederholung endet
        }
      },
      "category": "Music", // Kategorie des Events (Musik, Sport, Bildung usw.)
      "source": {
        "type": "api", // Typ der Quelle (api, manual, crawl)
        "name": "Eventbrite" // Name der Quelle
      },
      "createdAt": "2024-01-01T00:00:00", // Erstellungsdatum des Eintrags
      "updatedAt": "2024-01-01T00:00:00" // Datum der letzten Aktualisierung
});

module.exports = mongoose.model('Event', eventSchema);