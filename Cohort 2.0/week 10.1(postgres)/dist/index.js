"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
//write fn to create a user table in your database
const pg_1 = require("pg");
/* const client = new Client({
    host:'ep-summer-band-20444350.us-east-2.aws.neon.tech',
    port:5334,
database:'test',
user:'eswararaolanda10',
password:'Uinyf3pN7GIR'
}) */
const client = new pg_1.Client({
    connectionString: 'postgresql://eswararaolanda10:Uinyf3pN7GIR@ep-summer-band-20444350.us-east-2.aws.neon.tech/test?sslmode=require'
});
const dbConnection = () => __awaiter(void 0, void 0, void 0, function* () {
    yield client.connect();
    console.log("data base connected");
});
dbConnection();
function createUser() {
    return __awaiter(this, void 0, void 0, function* () {
        const user = yield client.query(`
       CREATE TABLE users (
            id SERIAL PRIMARY KEY,
            username VARCHAR(50) UNIQUE NOT NULL,
            email VARCHAR(255) UNIQUE NOT NULL,
            password VARCHAR(255) NOT NULL,
            created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
        );
       `);
    });
}
function insertData() {
    return __awaiter(this, void 0, void 0, function* () {
        const insertQuery = "INSERT INTO users(username,email,password) VALUES ('HELLOH', 'userD3@example.com', 'user_password');";
        try {
            const res = yield client.query(insertQuery);
            console.log(res);
        }
        catch (error) {
            console.log(error);
        }
    });
}
function insertDataNoinjection(username, email, password) {
    return __awaiter(this, void 0, void 0, function* () {
        const insertQuery = "INSERT INTO users(username,email,password) VALUES($1,$2,$3)";
        try {
            const values = [username, email, password];
            const res = yield client.query(insertQuery, values);
            console.log(res);
        }
        catch (error) {
            console.log(error);
        }
    });
}
insertDataNoinjection("username4", "user@gmail.com", "usrpassowrd");
function getUser(email) {
    return __awaiter(this, void 0, void 0, function* () {
        const query = `SELECT * FROM users WHERE email=$1`;
        const values = [email];
        const response = yield client.query(query, values);
        if (response.rows.length > 0) {
            console.log("userfound", response.rows[0]);
        }
        else {
            console.log("user not found");
        }
    });
}
getUser("dr@gmail.com");
