import Exam from "../../models/ExamModel"
import errorController from '../errorCont'

export default async function readExam(req, res) {
  const { _id } = req.query
  try {
    const foundTest = await Exam.findById(_id)
    if (!foundTest) return errorController(404, 'exam_not_found', res)
    const {
      name,
      exam,
      startDate,
      endDate,
      isTimeRestricted,
      timePerTest,
      isEditable,
      isShuffle,
    } = foundTest
    const newTest = exam.map(({ qID, qTXT, answers }) => ({
      qID,
      qTXT,
      answers,
    }))
    const data = {
      _id,
      name,
      exam: newTest,
      startDate,
      endDate,
      isTimeRestricted,
      timePerTest,
      isEditable,
      isShuffle,
      message: 'Exam found successfully',
    }
    return res.status(200).json(data)

  } catch (err) {
    return errorController(500, err, res)
  }
}
