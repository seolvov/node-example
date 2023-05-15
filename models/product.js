import mongoose from "mongoose";

const productSchema = mongoose.Schema(
    {
        title: {
            type: String,
            required: true
        },
        price: {
            type: Number,
            default: 0
        },
        description: {
            type: String,
            min: 3,
            max: 300
        },
        brand: String,
        company: String,
        stock: {
            type: Number,
            default: 0
        }
    },
    {
        timestamps: true
    }
)

const productModel = mongoose.model("product", productSchema)

export default productModel