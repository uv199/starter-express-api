import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    img: [String],
    category: [String],
    title: String,
    description: String,
    brand: String,
    price: Number,
    color: [String],
    gender: String,
    discount: Number,
    availableSize: [String],
    sellingCount: Number,
    totalCount: Number,
    rating: Number,
    totalRatingUser: Number,
    availableStock: Number,
    totalSoldUnit: Number,
    isSoldOut: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

module.exports = new mongoose.Schema("product", productSchema);
