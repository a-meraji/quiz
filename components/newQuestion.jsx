import React, { useState } from 'react'

export default function NewQuestions({ register, errors }) {
  const initialState = {
    qID: 0,
    qTXT: '',
    answers: [
      { aID: 0, aTXT: '' },
      { aID: 1, aTXT: '' },
      { aID: 2, aTXT: '' },
      { aID: 3, aTXT: '' },
    ],
    correct: 0,
  }
  const [questions, setQuestions] = useState([initialState])

  function testHandler(values, i) {
    let newQuestions = [...questions]
    newQuestions[i] = { ...newQuestions[i], ...values }
    setQuestions(newQuestions)
  }

  return (
    <>
      {questions.map((question, i) => (
        <>
          <input
            type="text"
            placeholder="question..."
            value={questions[i].qTXT}
            onChange={(e) => testHandler({ qID: i, qTXT: e.target.value }, i)}
          />
          {initialState.answers.map((a,j) => (
            <>
              <input type="radio" name={i} id={i + '/' + j} onClick={()=>testHandler({correct:j},i)} />
              <input
                type="text"
                placeholder="enter an answer..."
                value={questions[i]['answers'][j]['aTXT']}
                onChange={(e) => {
                  let answers = questions[i]['answers']
                  answers[j] = { aID: j, aTXT: e.target.value }
                  testHandler({ answers }, i)
                }}
              />
            </>
          ))}
        </>
      ))}

      <button onClick={() =>{console.log(questions); setQuestions((pre) => [...pre, initialState])}}>
        add question
      </button>
    </>
  )
}
