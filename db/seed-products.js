require("dotenv/config")
const mongoose = require("mongoose")
mongoose.connect(process.env.MONGODB_URI)

const Product = require("../models/Product.model")

const getRandom = require("../utils/getRandom")
const getRandomNumber = require("../utils/getRandomNumber")
const randomDate = require("../utils/randomDate")
const getRandomRange = require("../utils/getRandomRange")

const products = require("./seeds/fake-products.json")

const users = [
    "61f9495225cf8d00a52701fd",
    "61f9495225cf8d00a52701fe",
    "61f9495225cf8d00a52701ff",
    "61f9495225cf8d00a5270200",
    "61f9495225cf8d00a5270201",
    "61f9495225cf8d00a5270202",
    "61f9495225cf8d00a5270203",
    "61f9495225cf8d00a5270204",
    "61f9495225cf8d00a5270205",
    "61f9495225cf8d00a5270206",
    "61f9495225cf8d00a5270207",
    "61f9495225cf8d00a5270208",
    "61f9495225cf8d00a5270209",
    "61f9495225cf8d00a527020a",
    "61f9495225cf8d00a527020b",
    "61f9495225cf8d00a527020c",
    "61f9495225cf8d00a527020d",
    "61f9495225cf8d00a527020e",
    "61f9495225cf8d00a527020f",
    "61f9495225cf8d00a5270210",
    "61f9495225cf8d00a5270211",
]

const tF = [true, false]

let fakeProducts = []

for (let i = 0; i < products.length; i++) {
    fakeProducts.push({
        name: products[i].title,
        pictures: products[i].image,
        price: products[i].price,
        description: products[i].description,
        category: products[i].category,
        stock: getRandomNumber(50),
        bought: getRandomNumber(500),
        date: randomDate(),
        published: true,
        rating: [
            getRandomRange(1, 5),
            getRandomRange(1, 5),
            getRandomRange(1, 5),
            getRandomRange(1, 5),
            getRandomRange(1, 5),
            getRandomRange(1, 5),
            getRandomRange(1, 5),
            getRandomRange(1, 5),
            getRandomRange(1, 5),
            getRandomRange(1, 5),
        ],
        vendor: getRandom(users),
        featured: getRandom(tF),
    })
}

Product.insertMany(fakeProducts)
    .then(product => {
        console.log(`Success, ${product.length} products were added to the database`)
        mongoose.connection.close()
    })
    .catch(err => console.log(err))