import Exam from '../../models/ExamModel'
import errorController from '../errorCont'

export default async function createExam(req, res) {
  const postExam = req.body
  const newExam = new Exam(postExam)

  newExam
    .save()
    .then(() => {
      return res.status(201).json({
        status: 'success',
        message: 'Exam submited successfully',
      })
    })
    .catch((err) => {
       return errorController(500, err, res)
    })
}
