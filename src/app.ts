import "dotenv/config";
import "reflect-metadata";
import "express-async-errors";
import express from "express";
import loginRoutes from "./routers/login.routes";
import userRoutes from "./routers/user.routes";
import videoRoutes from "./routers/video.routes";
import categoryRoutes from "./routers/category.routes";
import { handleErros } from "./error/handleErros.errors";

const app = express();

app.use(express.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

app.use("/users", userRoutes);
app.use("/login", loginRoutes);
app.use("/videos", videoRoutes);
app.use("/category", categoryRoutes);

app.use(handleErros);

export default app;
