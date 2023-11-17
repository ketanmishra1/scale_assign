const mongoose = require('mongoose')

const orderSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    productID: {
      type: String,
      required: [true, 'Please add a Prodcut ID'],
    },
    shopID: {
      type: String,
      required: [true, 'Please add a Shop ID'],
    },
    orderID: {
      type: String,
      required: [true, 'Please add a Order ID'],
    },
    productName: {
      type: String,
      required: [true, 'Please add a Product Name'],
    },
    soldPrice: {
      type: String,
      required: [true, 'Please add a Sold Price'],
    },
  },
  {
    timestamps: true,
  }
)

module.exports = mongoose.model('Order', orderSchema)
