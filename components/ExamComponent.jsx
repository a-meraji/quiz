import { useDispatch, useSelector } from 'react-redux'
import { toggleQuestionIndex, sendAnswers } from '../redux/ducks/examSlice'
import { GrFormNext, GrFormPrevious } from 'react-icons/gr'
import Test from './test.jsx'

function ExamComponent() {
  const dispatch = useDispatch()
  const { questionIndex, _id,name, exam, answers } = useSelector(
    (state) => state.exam
  )

  return (
    <div className="mx-auto -mt-16 w-11/12 max-w-5xl">
      <h2 className='my-8 text-lg'>exam: {name}</h2>
      {exam.length > 0 && (
        <Test exam={exam[questionIndex]} index={questionIndex + 1} />
      )}
      {/* pre, next and finsh buttuns */}
      <div className="mt-20 flex w-full justify-between gap-5">
        <button
          className={`${
            questionIndex === 0 ? 'opacity-50' : 'hover:bg-yellow-500'
          }
        flex  items-center justify-center rounded-lg bg-yellow-300 px-4 py-2 transition-colors`}
          disabled={questionIndex === 0}
          onClick={() => dispatch(toggleQuestionIndex('dec'))}
        >
          <GrFormPrevious />
          <span>pre</span>
        </button>
        {questionIndex === exam.length - 1 && (
          <button
            className="rounded-lg bg-blue-400 px-4 py-2 transition-colors hover:bg-blue-500"
            onClick={() => dispatch(sendAnswers({ _id, answers }))}
          >
            finish
          </button>
        )}
        <button
          disabled={questionIndex === exam.length - 1}
          onClick={() => dispatch(toggleQuestionIndex('inc'))}
          className={`${
            questionIndex === exam.length - 1
              ? 'opacity-50'
              : 'hover:bg-yellow-500'
          }
        flex items-center justify-center rounded-lg bg-yellow-300 px-4 py-2 transition-colors`}
        >
          <span>next</span>
          <GrFormNext />
        </button>
      </div>
    </div>
  )
}

export default ExamComponent
