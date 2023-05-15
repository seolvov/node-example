import express from "express";
import productModel from "../models/product.js";

const router = express.Router()

// console.log("success")
router.get("/all", (req, res) => {
    res.json({
        msg: "product get all"
    })
})
router.post("/", async (req, res) => {
    const userInput = new productModel({
        title: req.body.productTitle,
        price: req.body.productPrice,
        description: req.body.productDesc,
        brand: req.body.productBrand,
        company: req.body.productCompany,
        stock: req.body.productStock
    })

    const newProduct = await userInput.save()

    res.json({
        msg: "created a product",
        product: newProduct
    })
})
router.put("/", (req, res) => {
    res.json({
        msg: "updated a product"
    })
})
router.delete("/", (req, res) => {
    res.json({
        msg: "deleted a product"
    })
})

export default router