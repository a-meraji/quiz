import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import { useSelector, useDispatch } from 'react-redux'
import {
  toggleQuestionIndex,
  getExam,
  sendAnswers,
  setIsStarted,
} from '../../redux/ducks/examSlice'
import Test from '../../components/test.jsx'
import ResultModal from '../../components/resultModal.jsx'
import { GrFormNext, GrFormPrevious } from 'react-icons/gr'

function Exam() {
  const router = useRouter()
  const dispatch = useDispatch()
  const _id = router.query._id

  const { questionIndex } = useSelector((state) => state.exam)
  const { isStarted, exam, answers, examSubmited, result, wrongAnswerds } =
    useSelector((state) => state.exam)

  useEffect(async () => {
    if (isStarted) return
    dispatch(getExam(_id))
  }, [isStarted, _id])

  return (
    <div className="relative mx-auto flex h-screen w-11/12 max-w-xl flex-col justify-center">
      {isStarted ? (
        <>
          {exam.length > 0 && (
            <Test exam={exam[questionIndex]} index={questionIndex + 1} />
          )}
          <div className="flex justify-between gap-5 mt-10">
            <button
              className={`${questionIndex === 0 ? 'opacity-50' : 'hover:bg-yellow-500'}
              bg-yellow-300  flex items-center justify-center rounded-lg px-4 py-2 transition-colors`}
              disabled={questionIndex === 0}
              onClick={() => dispatch(toggleQuestionIndex('dec'))}
            >
              <GrFormPrevious />
              <span>pre</span>
            </button>
            {questionIndex === exam.length - 1 && (
              <button 
              className='rounded-lg bg-blue-400 px-4 py-2 transition-colors hover:bg-blue-500' 
              onClick={() => dispatch(sendAnswers({ _id, answers }))}>
                finish
              </button>
            )}
            <button
              disabled={questionIndex === exam.length - 1}
              onClick={() => dispatch(toggleQuestionIndex('inc'))}
              className={`${questionIndex === exam.length - 1? 'opacity-50' : 'hover:bg-yellow-500'}
              flex items-center justify-center rounded-lg bg-yellow-300 px-4 py-2 transition-colors`}
            >
              <span>next</span><GrFormNext/>
            </button>
          </div>
        </>
      ) : (
        <button
          onClick={() => dispatch(setIsStarted(true))}
          className="mx-auto mt-[47vh] rounded-lg bg-yellow-300 py-5 px-12 hover:bg-yellow-500"
        >
          start
        </button>
      )}
      {examSubmited && (
        <ResultModal result={result} wrongAnswerds={wrongAnswerds} />
      )}
    </div>
  )
}
export default Exam
