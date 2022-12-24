import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import helmet from 'helmet';
import dotenv from 'dotenv';

//ROUTE IMPORTS
import adminRoutes from './routes/admin.js';

//CONFIGURATION
dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: 'cross-origin' }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

//ROUTES
app.use('/admin', adminRoutes);

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
