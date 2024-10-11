import * as mongoose from 'mongoose';
export const ItemSchema = new mongoose.Schema(
  {
    id: Number,
    name: String,
    description: String,
    price: Number,
  },
  // { _id: false },
);
