import express from 'express'
import cors from 'cors'
import bodyParser from "body-parser";
import {productsRouter} from "./routes/products-router";

const app = express()
const port = process.env.PORT || 4000

app.use(cors());
const parserMiddleware =  bodyParser({})
app.use(parserMiddleware)

app.use('/products', productsRouter)

app.listen(port, () => {
    console.log(`Server listening port ${port}`)
})