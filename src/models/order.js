import mongoose from "mongoose";
const ObjectID = mongoose.Schema.Types.ObjectId

const orderSchema = new mongoose.Schema({
    product: [{
        productId: {
            type: ObjectID,
            ref: "product"
        },
        count: Number
    }],
    paymentType: { type: String },
    address: { type: String },
    total: { type: Number },
    status: { type: String }
}, { timestamps: true })

module.exports = new mongoose.model("order", orderSchema)
