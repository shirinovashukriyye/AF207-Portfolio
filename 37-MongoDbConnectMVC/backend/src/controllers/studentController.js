import student from "../models/studentModel.js";

export const createStudent = async (req, res) => {
  try {
    const newStudent = new student(req.body);
    await newStudent.save();
    res
      .status(201)
      .json({ message: "Student created successfully", student: newStudent });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

export const getAllStudent = async (req, res) => {
  try {
    const getAllStudent = await student.find();

    res
      .status(201)
      .json({ message: "Student created successfully", student:getAllStudent });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

export const getStudentById=async(req,res)=>{
const {id}=req.params
try {
  const findStudent=await student.findById(id)
  if(!findStudent){
return res.status(404).send({message:"Student not found"})
  }
  res
      .status(201)
      .json({ message: "Student find by id successfully", student: findStudent });
} catch (error) {
  res.status(500).json({ message: "Server error", error: error.message });
}
}


export const deleteStudent=async(req,res)=>{
  const {id}=req.params
  try {
    const findStudent=await student.findByIdAndDelete(id)
    if(!findStudent){
  return res.status(404).send({message:"Student not found"})
    }
    res
        .status(201)
        .json({ message: "Student deleted successfully", student: findStudent });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
  }