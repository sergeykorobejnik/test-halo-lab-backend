import  {Router} from "express";
import Product from "../model/Product";

const productsRouter = Router()

productsRouter.get(
    "/get-products",
    async (req, res) => {
        let products = await Product.find()
        let cheapest = await Product.find().sort({price: +1}).limit(1)
        cheapest = cheapest.map(doc => doc.toObject())
        products = products.map(doc => doc.toObject())
        res.status(200)
        res.send({
            products: [...products],
            cheapestProduct: cheapest[0]
        })
    }
)

productsRouter.post(
    "/post-product",
    async (req, res) => {
        console.log(req.body)
        res.sendStatus(200)
    }
)

export default productsRouter