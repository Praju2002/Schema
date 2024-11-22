import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },

  orderItems: [
    {
      productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
        required: true,
      },
      quantity: {
        type: Number,
        required: true,
        min:1
      },
      price: {
        type: Number,
        required: true,
        min:1
      },
      totalAmount: {
        type: Number,
        required: true,
      },
    },
  ],
  status: {
    type: String,
    required: true,
  },
  payment: {
    type: String,
    required: true,
  },
});

const Order = mongoose.model("Order", orderSchema);
module.exports = { Order };