const { Schema, model } = require("mongoose");

const orderSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "User"
  },
  products: [
    {
      id: {
        type: Schema.Types.ObjectId,
        ref: "Product"
      },
      amount: {
        type: Number
      }
    }
  ],
  price: {
    type: Number
  }
})

module.exports = model("Order", orderSchema);