import { Schema } from 'mongoose';
const ID = Schema.ObjectId;
export const bookingRequestSchema = new Schema({
  name: String,
  email: String,
  phone: String,
  gender: String,
  bookingStartDate: Date,
  bookingEndDate: Date,
});
