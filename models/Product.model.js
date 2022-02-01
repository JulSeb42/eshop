const { Schema, model } = require("mongoose")

const productSchema = new Schema(
    {
        name: String,
        pictures: Array,
        price: Number,
        description: String,
        category: String,
        stock: Number,
        featured: Boolean,
        bought: Number,
        date: String,
        published: Boolean,
        rating: Array,

        comments: [
            {
                type: Schema.Types.ObjectId,
                ref: "Comment",
            },
        ],

        alternatives: [
            {
                type: Schema.Types.ObjectId,
                ref: "Product",
            },
        ],

        vendor: {
            type: Schema.Types.ObjectId,
            ref: "User",
        },
    },
    {
        timestamps: true,
    }
)

const Product = model("Product", productSchema)

module.exports = Product
