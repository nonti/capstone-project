import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
dotenv.config();
import authRoutes from "./routes/auth.route.js";


const PORT = 4000;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(cors(
  {
    origin: "http://localhost:3000",
    credentials: true,
  }
));


app.listen(4000, () => {
  console.log(`Server running on port ${PORT}`);
})

mongoose.connect(process.env.MONGODB_URI, {
}).then(() => {
  console.log("Connected to MongoDB");
}).catch((err) => {
  console.log(err);
})


//Routes
app.use("/api/auth", authRoutes);


//Middleware
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Something went wrong. Please try again!'
  return res.status(statusCode).json({
    success: false,
    statusCode,
     message
    });
});