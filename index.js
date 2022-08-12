import express from 'express';
// import cors from 'cors'
import { postMessage, receivedMessage } from './src/messages.js';

const PORT = 3003;

const app = express()
app.use(express.json())
// app.use(cors())
app.post("/", postMessage)
app.get("/", receivedMessage)

app.listen(PORT, () => console.log(`Listening on port ${PORT}`))







