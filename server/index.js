import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import helmet from 'helmet';
import dotenv from 'dotenv';

//ROUTE IMPORTS
import adminRoutes from './routes/admin.js';
import bookingRoutes from './routes/bookings.js';
//CONFIGURATION
dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: 'cross-origin' }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,DELETE,OPTIONS');
  next();
});

//ROUTES
app.use('/api/admin', adminRoutes);
app.use('/api/bookingrequest', bookingRoutes);

//mongoose deprecation warning fix
mongoose.set('strictQuery', false);

//DB CONNECT
const PORT = process.env.PORT || 9000;
const DB = mongoose;
DB.connect(process.env.APP_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
  })
  .catch((error) => console.log('ERROR : ', error));
