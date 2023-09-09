import { port } from "./config";
import express, { Application, Request, Response } from "express";
import userRoute from "./routes/users.route";

const app: Application = express();

app.use(express.json());

app.use("/api/users", userRoute);

app.listen(port, () => {
  console.log(`Server running on port ${port}.`);
});
