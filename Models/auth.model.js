import mongoose from "mongoose";

const createSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
    unique: true,
  },
  src: {
    type: String,
    required: true,
  },
  Category: {
    type: String,
    required: true,
  },
});

// Export model (no direct connection here)
export const CategoryItems = mongoose.model("foodyitems", createSchema);
