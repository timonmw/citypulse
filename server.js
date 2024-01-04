import 'dotenv/config';
import { connect } from 'mongoose';
import app from './src/app.js';

const PORT = process.env.PORT || 3000;
const MONGO_URI = process.env.MONGO_URI;

connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch(err => {
    console.error('Database connection failed', err);
  });
