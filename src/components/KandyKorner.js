import React from "react"
import { LocationList } from "./LocationList/LocationList"
import { ProductList } from "./ProductList/ProductList"

export const KandyKorner = () => {
    return (
        <>
        <h1>KandyKorner's Kandy Store</h1>
        
        <h2>Location List</h2>
        <LocationList />

        <h2>Products</h2>
        <ProductList />
        </>
    )
}