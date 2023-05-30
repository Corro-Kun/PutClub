import {createPool} from "mysql2/promise.js";
import { HOST_DB,USER_DB,PORT_DB,PASSWORD_DB, DATABASE } from "../config.js";

export const Sql = createPool({
    user: USER_DB,
    host: HOST_DB,
    port: PORT_DB,
    password: PASSWORD_DB,
    database: DATABASE
});