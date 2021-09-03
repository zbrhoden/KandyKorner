import React, { useEffect, useState } from "react"

export const ProductList = () => {
    const [products, setproducts] = useState([])

    useEffect(
        () => {
            fetch("http://localhost:8088/products?_expand=productType&_sort=productTypeId")
                .then(response => response.json())
                .then((data) => {
                    setproducts(data)
                })
        },
        []
    )
    return (
        <>
            <h1>Products</h1>
            <div className="products_box">
                {
                    products.map(
                        (product) => {
                            return <ul className="products" key={`product--${product.id}`}>
                                <li className="product">{product.name}</li>
                                <li className="product type">{product.productType.type}</li>
                                <li className="product price">: ${product.price}
                                </li>
                            </ul>
                        }
                    )
                }
            </div>
        </>
    )
}