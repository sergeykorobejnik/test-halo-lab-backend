import * as mongoose from "mongoose";
const {Schema, model, Types} = mongoose

const Product = new Schema({
    name: String,
    category: String,
    price: String,
})

export default model("Product", Product)