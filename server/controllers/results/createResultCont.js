import Exam from '../../models/ExamModel'
import errorController from '../errorCont'

export default async function createResult(req, res) {
  const {_id, answers} = req.body
  try {
    const exam = await Exam.findById(_id)
    if (!exam) {
      return errorController(404, 'exam_not_found', res)
    }
    
    let correctAnswers={}
     exam.exam.forEach(test => {
       correctAnswers[test.qID] = test.correct;
     });
     // calculate result and detect wrong answerd questions
    const{correctAnswersCount, wrongAnswerds} = answers.reduce((acc,curr)=>{
      if(curr.aID===correctAnswers[curr.qID]){
        return{...acc,correctAnswersCount:acc.correctAnswersCount+1}
      }else{
        const wrongAnswerd = exam.exam.filter((test)=>test.qID===curr.qID)
        return{...acc,wrongAnswerds:[...acc.wrongAnswerds,wrongAnswerd[0].qTXT]}
      }
    },{correctAnswersCount:0,wrongAnswerds:[]})

    const result = `${correctAnswersCount}/${exam.exam.length}`
    
    res.status(200).json({ result, wrongAnswerds })
  } catch (err) {
    return errorController(500, 'internal_server_error', res)
  }
}
