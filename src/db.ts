import { db_connection_url } from "./config";
import mysql from "mysql2/promise";

export default mysql.createPool(db_connection_url);
