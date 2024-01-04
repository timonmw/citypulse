const mongoose = require('mongoose');
const app = require('./src/app');

const PORT = process.env.PORT || 3000;
const MONGO_URI = 'deine_mongodb_uri';

mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch(err => {
    console.error('Database connection failed', err);
  });