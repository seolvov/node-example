import mongoose from "mongoose";

const productSchema = mongoose.Schema(
    {
        title: String,
        price: Number,
        description: String,
        brand: String,
        company: String,
        stock: Number
    },
    {
        timestamps: true
    }
)

const productModel = mongoose.model("product", productSchema)

export default productModel