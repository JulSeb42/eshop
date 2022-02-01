require("dotenv/config")
const mongoose = require("mongoose")
mongoose.connect(process.env.MONGODB_URI)

// Users
const User = require("../models/User.model")

const idJulien = "61f9495225cf8d00a52701fd"
const productsJulien = ["61f94a26b843040c840063d6", "61f94a26b843040c840063dc"]

User.findOneAndUpdate(
    { _id: idJulien },
    { $push: { products: productsJulien } },
    { new: true }
)
    .then(products => {
        console.log(products)
    })
    .catch(err => console.log(err))

const idToby = "61f9495225cf8d00a52701fe"
const productsToby = ["61f94a26b843040c840063cd", "61f94a26b843040c840063d1"]

User.findOneAndUpdate(
    { _id: idToby },
    { $push: { products: productsToby } },
    { new: true }
)
    .then(products => {
        console.log(products)
    })
    .catch(err => console.log(err))

const idJoe = "61f9495225cf8d00a52701ff"
const productsJoe = ["61f94a26b843040c840063d4"]

User.findOneAndUpdate(
    { _id: idJoe },
    { $push: { products: productsJoe } },
    { new: true }
)
    .then(products => {
        console.log(products)
    })
    .catch(err => console.log(err))

const idAva = "61f9495225cf8d00a5270200"
const productsAva = []

User.findOneAndUpdate(
    { _id: idAva },
    { $push: { products: productsAva } },
    { new: true }
)
    .then(products => {
        console.log(products)
    })
    .catch(err => console.log(err))

const idLara = "61f9495225cf8d00a5270201"
const productsLara = []

User.findOneAndUpdate(
    { _id: idLara },
    { $push: { products: productsLara } },
    { new: true }
)
    .then(products => {
        console.log(products)
    })
    .catch(err => console.log(err))

const idKian = "61f9495225cf8d00a5270202"
const productsKian = ["61f94a26b843040c840063d5"]

User.findOneAndUpdate(
    { _id: idKian },
    { $push: { products: productsKian } },
    { new: true }
)
    .then(products => {
        console.log(products)
    })
    .catch(err => console.log(err))

const idGeorgina = "61f9495225cf8d00a5270203"
const productsGeorgina = ["61f94a26b843040c840063d9"]

User.findOneAndUpdate(
    { _id: idGeorgina },
    { $push: { products: productsGeorgina } },
    { new: true }
)
    .then(products => {
        console.log(products)
    })
    .catch(err => console.log(err))

const idWilliam = "61f9495225cf8d00a5270204"
const productsWilliam = []

User.findOneAndUpdate(
    { _id: idWilliam },
    { $push: { products: productsWilliam } },
    { new: true }
)
    .then(products => {
        console.log(products)
    })
    .catch(err => console.log(err))

const idLewis = "61f9495225cf8d00a5270205"
const productsLewis = ["61f94a26b843040c840063d3", "61f94a26b843040c840063d8"]

User.findOneAndUpdate(
    { _id: idLewis },
    { $push: { products: productsLewis } },
    { new: true }
)
    .then(products => {
        console.log(products)
    })
    .catch(err => console.log(err))

const idTegan = "61f9495225cf8d00a5270206"
const productsTegan = []

User.findOneAndUpdate(
    { _id: idTegan },
    { $push: { products: productsTegan } },
    { new: true }
)
    .then(products => {
        console.log(products)
    })
    .catch(err => console.log(err))

const idAlicia = "61f9495225cf8d00a5270207"
const productsAlicia = ["61f94a26b843040c840063cf", "61f94a26b843040c840063db"]

User.findOneAndUpdate(
    { _id: idAlicia },
    { $push: { products: productsAlicia } },
    { new: true }
)
    .then(products => {
        console.log(products)
    })
    .catch(err => console.log(err))

const idChelsea = "61f9495225cf8d00a5270208"
const productsChelsea = ["61f94a26b843040c840063dd"]

User.findOneAndUpdate(
    { _id: idChelsea },
    { $push: { products: productsChelsea } },
    { new: true }
)
    .then(products => {
        console.log(products)
    })
    .catch(err => console.log(err))

const idLydia = "61f9495225cf8d00a5270209"
const productsLydia = ["61f94a26b843040c840063da"]

User.findOneAndUpdate(
    { _id: idLydia },
    { $push: { products: productsLydia } },
    { new: true }
)
    .then(products => {
        console.log(products)
    })
    .catch(err => console.log(err))

const idKate = "61f9495225cf8d00a527020a"
const productsKate = []

User.findOneAndUpdate(
    { _id: idKate },
    { $push: { products: productsKate } },
    { new: true }
)
    .then(products => {
        console.log(products)
    })
    .catch(err => console.log(err))

const idEloise = "61f9495225cf8d00a527020b"
const productsEloise = ["61f94a26b843040c840063de"]

User.findOneAndUpdate(
    { _id: idEloise },
    { $push: { products: productsEloise } },
    { new: true }
)
    .then(products => {
        console.log(products)
    })
    .catch(err => console.log(err))

const idKate2 = "61f9495225cf8d00a527020c"
const productsKate2 = ["61f94a26b843040c840063d7"]

User.findOneAndUpdate(
    { _id: idKate2 },
    { $push: { products: productsKate2 } },
    { new: true }
)
    .then(products => {
        console.log(products)
    })
    .catch(err => console.log(err))

const idNicole = "61f9495225cf8d00a527020d"
const productsNicole = []

User.findOneAndUpdate(
    { _id: idNicole },
    { $push: { products: productsNicole } },
    { new: true }
)
    .then(products => {
        console.log(products)
    })
    .catch(err => console.log(err))

const idAnthony = "61f9495225cf8d00a527020e"
const productsAnthony = []

User.findOneAndUpdate(
    { _id: idAnthony },
    { $push: { products: productsAnthony } },
    { new: true }
)
    .then(products => {
        console.log(products)
    })
    .catch(err => console.log(err))

const idHarvey = "61f9495225cf8d00a527020f"
const productsHarvey = [
    "61f94a26b843040c840063ce",
    "61f94a26b843040c840063d0",
    "61f94a26b843040c840063df",
    "61f94a26b843040c840063e0",
]

User.findOneAndUpdate(
    { _id: idHarvey },
    { $push: { products: productsHarvey } },
    { new: true }
)
    .then(products => {
        console.log(products)
    })
    .catch(err => console.log(err))

const idRyan = "61f9495225cf8d00a5270210"
const productsRyan = ["61f94a26b843040c840063d2"]

User.findOneAndUpdate(
    { _id: idRyan },
    { $push: { products: productsRyan } },
    { new: true }
)
    .then(products => {
        console.log(products)
    })
    .catch(err => console.log(err))

const idEva = "61f9495225cf8d00a5270211"
const productsEva = []

User.findOneAndUpdate(
    { _id: idEva },
    { $push: { products: productsEva } },
    { new: true }
)
    .then(products => {
        console.log(products)
        mongoose.connection.close()
    })
    .catch(err => console.log(err))
