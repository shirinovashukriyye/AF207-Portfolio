import express from "express"
import 'dotenv/config';
import "./src/db/dbConnection.js"
import studentRouter from "./src/routes/studentRouter.js";


const app=express()
const port=process.env.PORT || 4001;

app.use(express.json())

app.use("/api/students", studentRouter);
app.listen(port, (req,res)=>{
    console.log(`Server is run http://localhost:${port}`)
})