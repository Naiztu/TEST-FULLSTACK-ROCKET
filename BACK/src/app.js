import express,{json} from "express";
import cors from "cors";
import UserRoutes from "./routes/user.routes.js";

export const app = express();

app.use(cors());
app.use(json());

app.use("/user", UserRoutes);
