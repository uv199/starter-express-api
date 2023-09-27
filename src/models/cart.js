import mongoose from "mongoose";
const ObjectID = mongoose.Schema.Types.ObjectId;

const cartSchema = new mongoose.Schema(
  {
    product: [
      {
        productId: {
          type: ObjectID,
          ref: "product",
        },
        count: Number,
      },
    ],
    userId: { type: ObjectID },
  },
  { timestamps: true }
);

module.exports = new mongoose.model("cart", cartSchema);
