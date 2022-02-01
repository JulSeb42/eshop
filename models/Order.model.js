const { Schema, model } = require("mongoose")

const orderSchema = new Schema(
    {
        products: [
            {
                type: Schema.Types.ObjectId,
                ref: "Product",
            },
        ],

        status: {
            type: String,
            enum: ["ordered", "accepted", "shipping", "received"],
        },

        buyer: {
            type: Schema.Types.ObjectId,
            ref: "User",
        },

        vendor: {
            type: Schema.Types.ObjectId,
            ref: "User",
        },

        dateUpdates: Array,
        timeUpdates: Array,
        totalPrice: Number,
    },
    {
        timestamps: true,
    }
)

const Order = model("Order", orderSchema)

module.exports = Order
