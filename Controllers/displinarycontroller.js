import { DiscplinaryModel } from "../Models/discplinarymodel.js";

export  const addDiscplinary = async (req, res, next) => {
    try {
       // Add Recipe to the database
       const createDiscplinary = await DiscplinaryModel.create(req.body);
       // Return response
       res.status(201).json(createDiscplinary);
    } catch (error) {
       // Forward to express error handler
       next(error);
    }
 }
export  const getDiscplinary = async (req, res, next) => {
    try {
       // Add Recipe to the database
       const getDiscplinary = await DiscplinaryModel.find();
       // Return response
       res.status(200).json(getDiscplinary);
    } catch (error) {
       // Forward to express error handler
       next(error);
    }
 }

 export  const updateDiscplinary = async (req, res, next) => {
    try {
       // Add Recipe to the database
       const updateDiscplinary = await DiscplinaryModel.findByIdAndUpdate(req.params.id, req.body);
       // Return response
       res.status(200).json(updateDiscplinary);
    } catch (error) {
       // Forward to express error handler
       next(error);
    }
 }

 export  const deleteDiscplinary = async (req, res, next) => {
   try {
      // Add  to the database
      const deleteDiscplinary = await DiscplinaryModel.findByIdAndDelete(req.params.id);
      // Return response
      res.status(200).json(deleteDiscplinary);
   } catch (error) {
      // Forward to express error handler
      next(error);
   }
}