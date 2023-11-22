import mysql from "mysql";
import dotenv from "dotenv";
import OpenAI from "openai";

dotenv.config();

export const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
});

let mysqlConnectionConfig = {
    host: process.env.MYSQL_HOST,
    port: process.env.MYSQL_PORT,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASS,
    database: process.env.MYSQL_DB
}
export var mysqlConn = mysql.createConnection(mysqlConnectionConfig);

mysqlConn.connect(function(err) {
    if (err) throw err;
});
