import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import { useSelector, useDispatch } from 'react-redux'
import {
  toggleQuestionIndex,
  getExam,
  sendAnswers,
} from '../../redux/ducks/examSlice'
import Test from '../../components/test.jsx'
import ResultModal from '../../components/resultModal.jsx'

function Exam() {
  const router = useRouter()
  const dispatch = useDispatch()
  const _id = router.query._id

  useEffect(async () => {
    dispatch(getExam(_id))
  }, [_id])

  const { questionIndex } = useSelector((state) => state.exam)
  const { exam, answers, examSubmited, result, wrongAnswerds } = useSelector(
    (state) => state.exam
  )

  return (
    <div className="relative">
      {exam.length > 0 && <Test exam={exam[questionIndex]} />}
      <br />
      <button
        disabled={questionIndex === exam.length - 1}
        onClick={() => dispatch(toggleQuestionIndex('inc'))}
      >
        next
      </button>
      <br />
      <button
        disabled={questionIndex === 0}
        onClick={() => dispatch(toggleQuestionIndex('dec'))}
      >
        pre
      </button>
      <br />
      {questionIndex === exam.length - 1 && (
        <button onClick={() => dispatch(sendAnswers({ _id, answers }))}>
          finish
        </button>
      )}
      {examSubmited && (
        <ResultModal
          result={result}
          wrongAnswerds={wrongAnswerds}
        />
      )}
    </div>
  )
}
export default Exam
