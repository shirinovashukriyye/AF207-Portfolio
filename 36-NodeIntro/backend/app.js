import express from "express";
import fs from "fs"

const app = express();
const port=4000;
app.use(express.json());


let {students}=JSON.parse(fs.readFileSync("db.json"))



app.get("/", (req,res)=>{
    res.send("okey")
})

app.get("/api/students",(req,res)=>{
    try {
        res.status(200).send({message:"sucses" , data:students})
    } catch (error) {
        res.status(500).send({message:"Internal server error"})
        
    }
})

app.get("/api/students/:id",(req,res)=>{
    let {id}=req.params;

    try {
        let findUser=students.find((student)=>student.id == id)
        if (!findUser) {
            res.status(404).send({message:"student is not found"})
            
        } 
        res.status(200).send({message:"succsess" ,data:findUser})
    } catch (error) {
        res.status(500).send({message:"Internal server error"})
        
    }
})


app.delete("/api/students/:id",(req,res)=>{
    let {id}=req.params;

    try {
        let studentIndex=students.findIndex((student)=>student.id==id)

        if (studentIndex !==-1) {
            students.splice(studentIndex ,1)       
        }
        fs.writeFileSync("db.json", JSON.stringify({students}))
        res.status(200).send({message:"student deleted succsess", data:students})
        
    } catch (error) {
        res.status(500).send({message:"Internal server error"})
    }

})



app.post("/api/students", (req, res) => {
    try {
        let newStudent = req.body;

        if (!newStudent) {
            return res.status(400).send({ message: "student not found" });
        }

        students.push({ id: Date.now(), ...newStudent });
        fs.writeFileSync("db.json", JSON.stringify({ students }));
        res.status(200).send({ message: "sucses", data: newStudent });

    } catch (error) {
        res.status(500).send({ message: "Internal server error" });
    }
});


app.listen(port,()=>{
    console.log("server is up");
    
})