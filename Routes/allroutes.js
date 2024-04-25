
router.post('/student/login',studentlogin)
router.post('/student/signup', studentsignup)

router.post('/lecturer/login',Lecturerlogin )
router.post('/lecturer/signup', lectureSignup)

router.post('/grade', addGrade)
router.get('/grade', getGrade)
router.patch('/grade/:id', patchGrade)
router.delete('/grade/:id', deleteGrade)



router.post('/displinary', addDisciplanary)
router.get('/disciplinary', getDisciplinary)
router.patch('/disciplinary/:id',patchDisciplanary)
router.delete('/disciplinary/:id', deleteDisciplanry)


router.post('/schedule', addSchedule)
router.get('/schedule', getSchedule)
router.patch('/schedule/:id', patchSchedule)
router.delete('/schedule/:id', deleteSchedule )














