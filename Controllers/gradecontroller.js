import { GradeModel } from "../Models/grademodel.js";

export  const addGrade = async (req, res, next) => {
    try {
       // Add Recipe to the database
       const createGrade = await GradeModel.create(req.body);
       // Return response
       res.status(201).json(createGrade);
    } catch (error) {
       // Forward to express error handler
       next(error);
    }
 }
export  const getGrade = async (req, res, next) => {
    try {
       // Add Recipe to the database
       const getGrade = await GradeModel.find();
       // Return response
       res.status(200).json(getGrade);
    } catch (error) {
       // Forward to express error handler
       next(error);
    }
 }

 export  const updateGrade = async (req, res, next) => {
    try {
       // Add Recipe to the database
       const updateGrade = await GradeModel.findByIdAndUpdate(req.params.id, req.body);
       // Return response
       res.status(200).json(updateGrade);
    } catch (error) {
       // Forward to express error handler
       next(error);
    }
 }

 export  const deleteGrade = async (req, res, next) => {
   try {
      // Add  to the database
      const deleteGrade = await GradeModel.findByIdAndDelete(req.params.id);
      // Return response
      res.status(200).json(deleteGrade);
   } catch (error) {
      // Forward to express error handler
      next(error);
   }
}