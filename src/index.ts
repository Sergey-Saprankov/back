import express, {Request, Response} from 'express'
import cors from 'cors'
import {v1} from "uuid";
import bodyParser from "body-parser";

const app = express()
const port = process.env.PORT || 4000

app.use(cors());
const parserMiddleware =  bodyParser({})
app.use(parserMiddleware)

const products = [
    { id: v1(), name: 'Apple' },
    { id: v1(), name: 'Banana' },
    { id: v1(), name: 'Cherry' },
    { id: v1(), name: 'Grapes' },
    { id: v1(), name: 'Orange' },
    { id: v1(), name: 'Watermelon' },
    { id: v1(), name: 'Strawberry' },
    { id: v1(), name: 'Pineapple' },
    { id: v1(), name: 'Mango' },
    { id: v1(), name: 'Kiwi' },
    { id: v1(), name: 'Blueberry' },
    { id: v1(), name: 'Peach' },
    { id: v1(), name: 'Pear' },
    { id: v1(), name: 'Raspberry' },
    { id: v1(), name: 'Lemon' },
    { id: v1(), name: 'Lime' },
];

app.get(`/products`, (req: Request, res: Response) => {
    res.send(products)
})

app.delete(`/products/:id`, (req: Request, res: Response) => {
    const index = products.findIndex(el => el.id === req.params.id)

    if (index >= 0) {
        products.splice(index, 1)
        return res.send(204)
    }

    return res.send(404)
})

app.post(`/products`, (req: Request, res: Response) => {
    const newProduct = {
        id: v1(),
        name: req.body.name as string
    }

       products.push(newProduct)

    res.status(201).send(newProduct)
})

app.put(`/products/:id`, (req: Request, res: Response) => {
    for(let i = 0; i < products.length; i++) {
        if (products[i].id === req.params.id) {
            products[i].name = req.body.name
            return res.status(200).send(products[i])
        }
    }
    return res.status(404)
})

app.listen(port, () => {
    console.log(`Server listening port ${port}`)
})