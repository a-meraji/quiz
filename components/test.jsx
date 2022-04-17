import { useState } from 'react'
import Answer from './Answer'
import { useDispatch } from 'react-redux'
import { toggleQuestionIndex } from '../redux/ducks/examSlice'

function Test({ question }) {
  const [selected, setSelected] = useState(null)
  const dispatch = useDispatch()
  const { question: q, answers } = question
  return (
    <>
      <h3>{q}</h3>
      <div>
        <div className="grid grid-cols-2 grid-rows-2 gap-2 overflow-hidden">
          {answers.map((answer, i) => (
            <Answer
              answer={answer}
              i={i}
              qID={question.id}
              setSelected={setSelected}
              selected={selected}
            />
          ))}
        </div>
        <br />
        <button onClick={() => dispatch(toggleQuestionIndex('inc'))}>
          next
        </button>
        <br />
        <button onClick={() => dispatch(toggleQuestionIndex('dec'))}>
          pre
        </button>
      </div>
    </>
  )
}

export default Test
