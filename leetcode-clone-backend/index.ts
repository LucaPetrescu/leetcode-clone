import express, { Request, Response, Express } from "express";
import cors from "cors";
import dotenv from "dotenv";
import { MongooseService } from "./src/Database/MongooseService";
import { UserRoutes } from "./src/User/user.route.config";
import { RouteConfig } from "./src/Common/common.route.config";

dotenv.config();

const routes: Array<RouteConfig> = [];

const app: Express = express();
const port: Number = 5000;

// app.use(morgan('dev'))
app.use(cors());
app.use(express.json());

const mongooseService = MongooseService.connectToDatabase();
routes.push(new UserRoutes(app));

app.post("/api/hello", async (req: Request, res: Response) => {
  res.send("Hello World");
});

app.listen(port, () => console.log("Server running on port " + port));
