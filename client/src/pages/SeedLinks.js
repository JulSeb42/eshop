// Packages
import React, { useEffect, useState } from "react"
import axios from "axios"

// Components
import { Font } from "components-react-julseb"
import Page from "../components/layouts/Page"

function SeedLinks() {
    const [allUsers, setAllUsers] = useState([])
    const [allProducts, setAllProducts] = useState([])

    useEffect(() => {
        axios
            .get("/users/user")
            .then(res => setAllUsers(res.data))
            .catch(err => console.log(err))

        axios
            .get("/products/products")
            .then(res => setAllProducts(res.data))
            .catch(err => console.log(err))
    }, [])

    const filteredUsers = allUsers.filter(user => user.role === "vendor")

    return (
        <Page title="Seed links">
            <Font.H1>Seed</Font.H1>
            {/* <ul>
                {filteredUsers.map(user => (
                    <li>
                        "{user._id}",
                    </li>
                )
                )}
            </ul> */}

            <ul>
                {filteredUsers.map(user => (
                    <li key={user._id}>
                        const id{user.fullName.split(" ")[0]} = "{user._id}"
                        <br />
                        const products{user.fullName.split(" ")[0]} = [
                        {allProducts
                            .filter(product => product.vendor._id === user._id)
                            .map(product => `"${product._id}", `)}
                        ]
                        <br />
                        <br />
                        User.findOneAndUpdate(
                        <br />
                        &#123; _id: id{user.fullName.split(" ")[0]} &#125;,
                        <br />
                        &#123; $push: &#123; products: products
                        {user.fullName.split(" ")[0]} &#125; &#125;,
                        <br />
                        &#123; new: true &#125;
                        <br />
                        )<br />
                        .then(products =&gt; &#123;
                        <br />
                        console.log(products)
                        <br />
                        &#125;)
                        <br />
                        .catch(err =&gt; console.log(err))
                        <br />
                        <br />
                    </li>
                ))}
            </ul>
        </Page>
    )
}

export default SeedLinks
