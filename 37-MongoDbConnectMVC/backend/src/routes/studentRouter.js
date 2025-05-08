import express from "express";
import { createStudent, deleteStudent, getAllStudent, getStudentById } from "../controllers/studentController.js";

const studentRouter = express.Router()


studentRouter.post("/", createStudent)
studentRouter.get("/", getAllStudent)
studentRouter.get("/:id", getStudentById)
studentRouter.delete("/:id", deleteStudent)
export default studentRouter;
