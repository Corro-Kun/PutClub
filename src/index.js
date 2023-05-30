import express from "express";
import { PORT } from "./config.js";
import {App as ruters} from "./routers/index.routes.js"
import cors from "cors";

const App = express();

App.use(cors())

App.use(ruters);

App.listen(PORT);
console.log('port open on ', PORT);