const { Schema, model } = require("mongoose")

const addressSchema = new Schema(
    {
        addressName: String,
        name: String,
        streetName: String,
        streetNumber: String,
        zipCode: String,
        city: String,
        country: String,
        additionalInfo: String,
        phone: String,
        
        user: {
            type: Schema.Types.ObjectId,
            ref: "User",
        },
    },
    {
        timestamps: true,
    }
)

const Address = model("Address", addressSchema)

module.exports = Address


