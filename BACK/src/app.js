import express, { json } from "express";
import cors from "cors";
import { expressMiddleware } from "@apollo/server/express4";
import UserRoutes from "./routes/user.routes.js";
import { server } from "./graphql/index.js";

export const app = express();

app.use(cors());
app.use(json());
app.use("/users", UserRoutes);

await server.start();

app.use("/graphql", expressMiddleware(server));
