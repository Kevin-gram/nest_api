import * as mongoose from 'mongoose';

export const ItemSchema = new mongoose.Schema(
  {
    _id: {
      type: Number,
      unique: true,
    },
    name: {
      type: String,
      required: true,
      trim: true,
      maxlength: 100,
    },
    description: {
      type: String,
      trim: true,
      maxlength: 500,
    },
    price: {
      type: Number,
      required: true,
      min: 0,
    },
  },
  {
    _id: false,
    versionKey: false,
  },
);
