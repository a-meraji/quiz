import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import { useSelector, useDispatch } from 'react-redux'
import { getExam, setIsStarted } from '../../redux/ducks/examSlice'
import ExamComponent from '../../components/ExamComponent'
import ResultModal from '../../components/resultModal.jsx'

function Exam() {
  const router = useRouter()
  const dispatch = useDispatch()
  const _id = router.query._id

  const { isStarted, examSubmited, result, wrongAnswerds } = useSelector(
    (state) => state.exam
  )

  useEffect(async () => {
    if (isStarted) return
    dispatch(getExam(_id))
  }, [isStarted, _id])

  return (
    <div className="relative flex h-screen flex-col items-center justify-center">
      {isStarted ? ( // when exam is started
        <ExamComponent />
      ) : (
        // when exam is finished or not started yet
        <button
          onClick={() => dispatch(setIsStarted(true))}
          className="mx-auto rounded-lg bg-yellow-300 py-5 px-12 hover:bg-yellow-500"
        >
          start
        </button>
      )}
      {examSubmited && ( // showing the result of exam
        <ResultModal result={result} wrongAnswerds={wrongAnswerds} />
      )}
    </div>
  )
}
export default Exam
