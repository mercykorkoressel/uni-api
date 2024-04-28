import { ScheduleModel } from "../Models/shedulemodel.js";

export  const addSchedule = async (req, res, next) => {
    try {
       // Add Recipe to the database
       const createSchedule = await ScheduleModel.create(req.body);
       // Return response
       res.status(201).json(createSchedule);
    } catch (error) {
       // Forward to express error handler
       next(error);
    }
 }
export  const getSchedule = async (req, res, next) => {
    try {
       // Add Recipe to the database
       const getSchedule = await ScheduleModel.find();
       // Return response
       res.status(200).json(getSchedule);
    } catch (error) {
       // Forward to express error handler
       next(error);
    }
 }

 export  const updateSchedule = async (req, res, next) => {
    try {
       // Add Recipe to the database
       const updateSchedule = await ScheduleModel.findByIdAndUpdate(req.params.id, req.body);
       // Return response
       res.status(200).json(updateSchedule);
    } catch (error) {
       // Forward to express error handler
       next(error);
    }
 }

 export  const deleteSchedule = async (req, res, next) => {
   try {
      // Add  to the database
      const deleteSchedule = await ScheduleModel.findByIdAndDelete(req.params.id);
      // Return response
      res.status(200).json(deleteSchedule);
   } catch (error) {
      // Forward to express error handler
      next(error);
   }
}