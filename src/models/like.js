import mongoose from "mongoose";
const ObjectID = mongoose.Schema.Types.ObjectId

const likeSchema = new mongoose.Schema({
    productId: { type: ObjectID, ref: "product" },
    userId: { type: ObjectID, ref: "user" }
}, { timestamps: true })
s
module.exports = new mongoose.Schema("like", likeSchema)
