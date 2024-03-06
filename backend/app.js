import express from "express";
import cors from "cors";
import UserRoute from "./routes/UserRoute.js";

const app = express();
app.use(cors());
app.use(express.json());
app.use(UserRoute);

const port = 5000;
app.listen(port, () => console.log(`server run on port ${port}...`));