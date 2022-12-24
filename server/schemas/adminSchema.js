import { Schema } from 'mongoose';
const ID = Schema.ObjectId;
export const adminSchema = new Schema({
  _id: ID,
  type: String,
  username: String,
  password: String,
  active: Boolean,
});
