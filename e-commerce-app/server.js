import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import morgan from "morgan";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoute.js";
import categoryRoutes from "./routes/categoryRoute.js"
import productRoutes from "./routes/productRoute.js"
import cors from 'cors';

//configure env
dotenv.config();

//database config
connectDB();

const PORT = process.env.PORT

const app = express();

// Middlewares
app.use(cors());
app.use(express.json())
app.use(morgan('dev'))

//Routes
app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/category', categoryRoutes);
app.use('/api/v1/product', productRoutes);

// REST api
app.get('/', (req, res) => {
    res.send('Welcome to e-commerce app')
});

app.listen(PORT, () => {
    console.log(`Listening to port ${PORT}`.bgCyan.white)
})