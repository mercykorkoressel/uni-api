import { AssignModel } from "../Models/assignmodel.js";

export  const addAssign = async (req, res, next) => {
    try {
       // Add Recipe to the database
       const createAssign = await AssignModel.create(req.body);
       // Return response
       res.status(201).json(createAssign);
    } catch (error) {
       // Forward to express error handler
       next(error);
    }
 }
export  const getAssign = async (req, res, next) => {
    try {
       // Add Recipe to the database
       const getAssign = await AssignModel.find();
       // Return response
       res.status(200).json(getAssign);
    } catch (error) {
       // Forward to express error handler
       next(error);
    }
 }

 export  const updateAssign = async (req, res, next) => {
    try {
       // Add Recipe to the database
       const updateAssign = await AssignModel.findByIdAndUpdate(req.params.id, req.body);
       // Return response
       res.status(200).json(updateAssign);
    } catch (error) {
       // Forward to express error handler
       next(error);
    }
 }

 export  const deleteAssign = async (req, res, next) => {
   try {
      // Add  to the database
      const deleteAssign = await AssignModel.findByIdAndDelete(req.params.id);
      // Return response
      res.status(200).json(deleteAssign);
   } catch (error) {
      // Forward to express error handler
      next(error);
   }
}