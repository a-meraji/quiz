import { useSelector, useDispatch } from 'react-redux'
import { setAnswers } from '../redux/ducks/examSlice'

function Answer({ answer, i, qID }) {
  const dispatch = useDispatch()

  const { answers } = useSelector((state) => state.exam)
  const selectedAnswer = answers.filter((answer) => answer.qID === qID)[0] || {}

  function setAnswer(e) {
    const aID = i.toString() === selectedAnswer.aID ? null : e.target.id
    dispatch(setAnswers({ qID, aID }))
  }

  return (
    <div>
      <input
        type="radio"
        id={i}
        name={qID}
        checked={selectedAnswer.aID === i.toString() }
        value={answer}
        onClick={setAnswer}
        onChange={() => {}}
      />
      <label htmlFor={i}>{answer}</label>
    </div>
  )
}

export default Answer
