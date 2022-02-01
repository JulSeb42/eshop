const { Schema, model } = require("mongoose")

const userSchema = new Schema(
    {
        email: {
            type: String,
            required: true,
            unique: true,
        },

        fullName: {
            type: String,
            required: true,
        },

        phone: String,

        company: String,

        imageUrl: String,

        password: String,

        verified: Boolean,

        verifyToken: String,

        resetToken: String,

        orders: [
            {
                type: Schema.Types.ObjectId,
                ref: "Order",
            },
        ],

        paymentInfo: [
            {
                type: Schema.Types.ObjectId,
                ref: "PaymentInfo",
            },
        ],

        addresses: [
            {
                type: Schema.Types.ObjectId,
                ref: "Address",
            },
        ],

        role: {
            type: String,
            enum: ["buyer", "vendor", "admin"],
        },

        products: [
            {
                type: Schema.Types.ObjectId,
                ref: "Product",
            },
        ],

        conversations: [
            {
                type: Schema.Types.ObjectId,
                ref: "Conversation",
            },
        ],

        contacted: [
            {
                type: Schema.Types.ObjectId,
                ref: "User",
            },
        ],

        contactedBy: [
            {
                type: Schema.Types.ObjectId,
                ref: "User",
            },
        ],

        comments: [
            {
                type: Schema.Types.ObjectId,
                ref: "Comment",
            },
        ],
    },
    {
        timestamps: true,
    }
)

const User = model("User", userSchema)

module.exports = User
