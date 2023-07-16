import express, {Request, Response} from 'express'

const app = express()
const port = 4000

app.get('/', (req: Request, res: Response) => {
    res.send('Hi sergik11')
})

app.listen(port, () => {
    console.log(`Server listening port ${port}`)
})