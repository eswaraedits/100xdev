import { z } from 'zod';
import express from "express";

const app = express();
/* 
const a = z.string() //run time variable
type a = z.infer<typeof a> //compile time means never reaches to js as it doesnt support types right
*/


// Define the schema for profile update
const userProfileSchema = z.object({
  name: z.string().min(1, { message: "Name cannot be empty" }),
  email: z.string().email({ message: "Invalid email format" }),
  age: z.number().min(18, { message: "You must be at least 18 years old" }).optional(),
});

/* type userProfileSchemaType ={
    name:string,
    email:string,
    age:number
} */ //rather than doing like this i can say

type userProfileSchemaType = z.infer<typeof userProfileSchema> //workss wooow 

app.put("/user", (req, res) => {
  const { success } = userProfileSchema.safeParse(req.body);
  //const updateBody = req.body; // how to assign a type to updateBody?
    const updateBody:userProfileSchemaType = req.body; 
  if (!success) {
    res.status(411).json({});
    return
  }
  // update database here
  res.json({
    message: "User updated"
  })
});

app.listen(3000);