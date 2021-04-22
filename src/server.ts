import express from "express"
import "./database"
import { routes } from "./routes"

let porta = 3333
const app = express()

app.use(express.json())

app.use(routes)

app.listen(porta, ()=> {
    console.log(`Server is running on port ${porta}`)
})