import express from "express"
import cors from "cors"
import * as path from "path";
import * as fs from "fs";
import mongoose from "mongoose";
import config from "config"
import Product from "./model/Product";
import productsRouter from "./routes/products.route";

const PORT = process.env.PORT || config.get("port")
const app = express()
app.use(cors())
app.use(express.json())
app.use('/api/products', productsRouter)


async function runServer () {
    try {
        await mongoose.connect(config.get("mongoUri"))
        app.listen(PORT, () => console.log("SERVER RUNNING AT:" + PORT))
    } catch (e) {
        console.log(e.message)
    }
}
runServer()
