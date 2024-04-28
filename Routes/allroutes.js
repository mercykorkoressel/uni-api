import { addAnnounce, deleteAnnounce, getAnnounce, updateAnnounce } from "../Controllers/annoucement.js";
import { addAssign, deleteAssign, getAssign, updateAssign } from "../Controllers/assigncontroller.js";
import { addDiscplinary, deleteDiscplinary, getDiscplinary, updateDiscplinary } from "../Controllers/displinarycontroller.js";
import { addGrade, deleteGrade, getGrade, updateGrade } from "../Controllers/gradecontroller.js"
import { Router } from "express";
import { addSchedule, deleteSchedule, getSchedule, updateSchedule } from "../Controllers/scheduleController.js";

const router =Router()

router.post('/grade', addGrade)
router.get('/grade', getGrade)
router.patch('/grade/:id', updateGrade)
router.delete('/grade/:id', deleteGrade)



router.post('/disciplinary', addDiscplinary)
router.get('/disciplinary', getDiscplinary)
router.patch('/disciplinary/:id',updateDiscplinary)
router.delete('/disciplinary/:id', deleteDiscplinary)


router.post('/schedule', addSchedule)
router.get('/schedule', getSchedule)
router.patch('/schedule/:id', updateSchedule)
router.delete('/schedule/:id', deleteSchedule)

router.post('/assign', addAssign)
router.get('/assign', getAssign)
router.patch('/assign/:id', updateAssign)
router.delete('/assign/:id', deleteAssign )

router.post('/announce', addAnnounce)
router.get('/announce', getAnnounce)
router.patch('/announce/:id', updateAnnounce)
router.delete('/announce/:id', deleteAnnounce )


export default router











