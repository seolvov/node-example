import mongoose from "mongoose";

const productSchema = mongoose.Schema(
    {
        title: String,
        price: Number,
        description: String,
        brand: String,
        company: Stirng,
        stock: Number
    },
    {
        timestamps: true
    }
)

const productModel = productSchema.model("product", productSchema)

export default productModel