//write fn to create a user table in your database
import { Client } from "pg";

/* const client = new Client({
    host:'ep-summer-band-20444350.us-east-2.aws.neon.tech',
    port:5334,
database:'test',
user:'eswararaolanda10',
password:'Uinyf3pN7GIR'
}) */
const client = new Client({
    connectionString:'postgresql://eswararaolanda10:Uinyf3pN7GIR@ep-summer-band-20444350.us-east-2.aws.neon.tech/test?sslmode=require'
})

const  dbConnection = async ()=>{
    await client.connect()
    console.log("data base connected")
}
dbConnection()

async function createUser(){
    const user = await client.query(
       `
       CREATE TABLE users (
            id SERIAL PRIMARY KEY,
            username VARCHAR(50) UNIQUE NOT NULL,
            email VARCHAR(255) UNIQUE NOT NULL,
            password VARCHAR(255) NOT NULL,
            created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
        );
       `
    )
}
async function insertData(){
    const insertQuery = "INSERT INTO users(username,email,password) VALUES ('HELLOH', 'userD3@example.com', 'user_password');"
    try {
        const res =await client.query(insertQuery);
    console.log(res)
    } catch (error) {
        console.log(error)
    }
}


async function insertDataNoinjection(username:string,email:string,password:string){
    const insertQuery = "INSERT INTO users(username,email,password) VALUES($1,$2,$3)"
    try {
        const values = [username,email,password]
        const res = await client.query(insertQuery,values)
        console.log(res)
    } catch (error) {
        console.log(error)
    }
}
insertDataNoinjection("username4","user@gmail.com","usrpassowrd")


async function getUser(email:string){
    const query = `SELECT * FROM users WHERE email=$1`
    const values = [email]
    const response = await client.query(query,values)
    if(response.rows.length>0){
        console.log("userfound",response.rows[0])
    }
    else{
        console.log("user not found")
    }
}

getUser("dr@gmail.com")