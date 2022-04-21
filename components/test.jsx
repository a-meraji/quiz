import { useState } from 'react'
import Answer from './Answer'

function Test({ exam }) {
  const { qTXT: question, qID, answers } = exam
  const [selected, setSelected] = useState(null) // state for index of selected answer between all options
  return (
    <>
      <h3>{question}</h3>
      <div className="grid grid-cols-2 grid-rows-2 gap-2 overflow-hidden">
        {answers?.hasOwnProperty(qID) && Object.values(answers).map((answer, i) => (
          <Answer
            key={i}
            answer={answer}
            i={i}
            qID={qID}
            setSelected={setSelected}
            selected={selected}
          />
        ))}
      </div>
    </>
  )
}

export default Test
