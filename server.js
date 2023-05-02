import express from 'express';
const app = express()
import dotenv from 'dotenv'
dotenv.config()

import mongoose from 'mongoose';

import connectDB from './db/connect.js';

import notFoundMiddleware from './middleware/not-found.js';
import errorHandlerMiddleware from './middleware/error-handler.js';


app.get('/', (req, res) => {
    throw new Error('error')
    res.send('Welcome!')
})

app.use(notFoundMiddleware)
app.use(errorHandlerMiddleware)

const port = process.env.PORT || 8080

app.listen(port, () => {
    console.log(`Server is listening on port ${port}...`);
})

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
    } catch (error) {
        console.log(error);
    }
}

start()