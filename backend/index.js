import express from "express";
import cors from "cors"
import Connection from './db/db.js'
import Route from "./routes/route.js"

const app = express();
const port=5000

app.use(cors());
app.use(express.json());
app.use('/',Route);
Connection()

app.listen(port, () => {
    console.log(`iNotebook backend listening at http://localhost:${port}`)
})