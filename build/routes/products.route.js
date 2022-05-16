"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Product_1 = __importDefault(require("../model/Product"));
const productsRouter = (0, express_1.Router)();
productsRouter.get("/get-products", async (req, res) => {
    let products = await Product_1.default.find();
    let cheapest = await Product_1.default.find().sort({ price: +1 }).limit(1);
    cheapest = cheapest.map(doc => doc.toObject());
    products = products.map(doc => doc.toObject());
    res.status(200);
    res.send({
        products: [...products],
        cheapestProduct: cheapest[0]
    });
});
productsRouter.post("/post-product", async (req, res) => {
    console.log(req.body);
    res.sendStatus(200);
});
exports.default = productsRouter;
//# sourceMappingURL=products.route.js.map