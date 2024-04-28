import { AnnounceModel } from "../Models/annoucemodel.js";

export  const addAnnounce = async (req, res, next) => {
    try {
       // Add Recipe to the database
       const createAnnounce = await AnnounceModel.create(req.body);
       // Return response
       res.status(201).json(createAnnounce);
    } catch (error) {
       // Forward to express error handler
       next(error);
    }
 }
export  const getAnnounce = async (req, res, next) => {
    try {
       // Add Recipe to the database
       const getAnnounce = await AnnounceModel.find();
       // Return response
       res.status(200).json(getAnnounce);
    } catch (error) {
       // Forward to express error handler
       next(error);
    }
 }

 export  const updateAnnounce = async (req, res, next) => {
    try {
       // Add Recipe to the database
       const updateAnnounce = await AnnounceModel.findByIdAndUpdate(req.params.id, req.body);
       // Return response
       res.status(200).json(updateAnnounce);
    } catch (error) {
       // Forward to express error handler
       next(error);
    }
 }

 export  const deleteAnnounce = async (req, res, next) => {
   try {
      // Add  to the database
      const deleteAnnounce = await AnnounceModel.findByIdAndDelete(req.params.id);
      // Return response
      res.status(200).json(deleteAnnounce);
   } catch (error) {
      // Forward to express error handler
      next(error);
   }
}