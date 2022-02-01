const { Schema, model } = require("mongoose")

const conversationSchema = new Schema(
    {
        buyer: {
            type: Schema.Types.ObjectId,
            ref: "User",
        },

        vendor: {
            type: Schema.Types.ObjectId,
            ref: "User",
        },

        messages: [
            {
                sender: {
                    type: Schema.Types.ObjectId,
                    ref: "User",
                },

                message: {
                    type: String,
                    required: true,
                },

                createdDay: String,
                createdTime: String,
            },
        ],

        dateCreated: String,
        timeCreated: String,
        read: Boolean,
    },
    {
        timestamps: true,
    }
)

const Conversation = model("Conversation", conversationSchema)

module.exports = Conversation
