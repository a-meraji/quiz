import React, { useEffect } from 'react'
import Test from '../../components/test.jsx'
import { useSelector, useDispatch } from 'react-redux'
import {
  toggleQuestionIndex,
  getExam,
  setResult,
} from '../../redux/ducks/examSlice'
import { useRouter } from 'next/router'
import { setLoading } from '../../redux/ducks/layoutSlice'
import axios from 'axios'

function Exam() {
  const router = useRouter()
  const dispatch = useDispatch()
  const _id = router.query._id

  useEffect(async () => {
    dispatch(getExam(_id))
  }, [_id])

  const { questionIndex } = useSelector((state) => state.exam)
  const { exam, answers, result, wrongAnswerds } = useSelector(
    (state) => state.exam
  )

  async function sendAnswers() {
    const res = await axios.post(`/api/results`, {
      _id,
      answers,
    })
    dispatch(setLoading(true))
console.log("res: ", res.status, !res.status);
    dispatch(setLoading(!res.status))
    const { result, wrongAnswerds } = res.data
    dispatch(setResult({ result, wrongAnswerds }))
  }

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
        <button onClick={sendAnswers}>finish</button>
      )}
    </div>
  )
}
export default Exam

/*
<ResultModal
          result={result}
          wrongAnswerds={wrongAnswerds}
          setResultModal={setResultModal}
        />
*/
