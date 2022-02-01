const { Schema, model } = require("mongoose")

const paymentInfoSchema = new Schema(
    {
        cardName: String,
        holderName: String,
        cardNumber: String,
        expiryDate: String,
        cvc: String,
        country: String,
        
        user: {
            type: Schema.Types.ObjectId,
            ref: "User",
        },
    },
    {
        timestamps: true,
    }
)

const PaymentInfo = model("PaymentInfo", paymentInfoSchema)

module.exports = PaymentInfo
