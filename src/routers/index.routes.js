import {Router} from "express";
import { List, Consult, Counter } from "../controllers/index.controllers.js";

export const App = Router();

App.get('/', List)

App.get('/:id', Consult );

App.get('/count', Counter);