import express from 'express';
import mongoose from 'mongoose';
import { adminSchema } from '../schemas/adminSchema.js';
const router = express.Router();
const db = mongoose.model('administrators', adminSchema);

router.get('/', async (req, res) => {
  db.find({}, (error, result) => {
    error
      ? res.status(400).send({ Error: error })
      : res.status(200).send(result);
  });
});

export default router;
