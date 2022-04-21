import Exam from '../../models/ExamModel'
import errorController from '../errorCont'

export default async function createExam(req, res) {
  const postedTest = req.body
  const newTest = new Exam(postedTest)

  newTest
    .save()
    .then((data) => {
      return res.status(201).json({
        status: 'success',
        message: 'Exam submited successfully',
        _id: data._id,
      })
    })
    .catch((err) => {
       return errorController(500, err, res)
    })
}
