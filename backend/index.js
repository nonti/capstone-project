import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
dotenv.config();
import authRoutes from "./routes/auth.route.js";
import userRoutes from "./routes/user.route.js";

const PORT = process.env.PORT;
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
app.use(cookieParser());


app.listen(PORT, () => {
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
app.use("/api/user", userRoutes);


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