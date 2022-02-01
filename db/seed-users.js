require("dotenv/config")
const mongoose = require("mongoose")
mongoose.connect(process.env.MONGODB_URI)

// Generate users
const User = require("../models/User.model")

// Packages
const bcrypt = require("bcryptjs")
const password = "Password42"
const salt = bcrypt.genSaltSync()
const hash = bcrypt.hashSync(password, salt)

const getRandomString = require("../utils/getRandomString")
const slugify = require("../utils/slugify")

const vendors = require("./seeds/fake-vendors.json")

// https://res.cloudinary.com/dyfxmafvr/image/upload/v1641922926/blog-cms/avcatroirewqyp9bivmo.svg

const realUsers = [
    {
        email: "julien@buyer.com",
        password: hash,
        fullName: "Julien Sebag",
        phone: "499621178290",
        imageUrl:
            "https://res.cloudinary.com/dyfxmafvr/image/upload/v1642540745/forum-app/lqsfv8ra00a9ji3bvvg7.jpg",
        role: "buyer",
        verified: true,
    },
    {
        email: "julien@vendor.com",
        password: hash,
        fullName: "Julien Sebag",
        company: "Julien's products",
        phone: "499621178290",
        imageUrl:
            "https://res.cloudinary.com/dyfxmafvr/image/upload/v1641922926/blog-cms/avcatroirewqyp9bivmo.svg",
        role: "vendor",
        verified: true,
        verifyToken: getRandomString(20),
    },
]

let fakeVendors = []

for (let i = 0; i < vendors.length; i++) {
    fakeVendors.push({
        fullName: `${vendors[i].GivenName} ${vendors[i].Surname}`,
        email: `${vendors[i].GivenName.toLowerCase()}.${vendors[
            i
        ].Surname.toLowerCase().replaceAll("'", "")}@${vendors[
            i
        ].Company.toLowerCase()
            .replaceAll("'", "")
            .replaceAll(" ", "-")}.com`,
        password: hash,
        company: vendors[i].Company,
        phone: vendors[i].TelephoneNumber,
        imageUrl: vendors[i].logo,
        role: "vendor",
        verified: true,
        verifyToken: getRandomString(20),
    })
}

User.insertMany(realUsers)
    .then(user => {
        console.log(
            `Success, ${user.length} real user was added to the database`
        )
    })
    .catch(err => console.log(err))

User.insertMany(fakeVendors)
    .then(user => {
        console.log(`Success, ${user.length} users were added to the database`)
        mongoose.connection.close()
    })
    .catch(err => console.log(err))
