const { Schema, model } = require("mongoose")

const commentSchema = new Schema(
    {
        user: {
            type: Schema.Types.ObjectId,
            ref: "User",
        },

        product: {
            type: Schema.Types.ObjectId,
            ref: "Product",
        },
        title: String,
        rating: Number,
        body: String,
        showName: Boolean,
        datePosted: String,
        timePosted: String,
        dateEdited: String,
        timeEdited: String,
    },
    {
        timestamps: true,
    }
)

const Comment = model("Comment", commentSchema)

module.exports = Comment
