import React, { useState } from 'react'

export default function NewQuestions({ questions, setQuestions }) {

  function testHandler(values, i) {
    let newQuestions = [...questions]
    newQuestions[i] = { ...newQuestions[i], ...values }
    setQuestions(newQuestions)
  }

  return (
    <>
      {questions.map((question, i) => (
        <>
          <div>
            <span>{i}-{" "}</span>
            <input
              type="text"
              placeholder="question..."
              value={questions[i].qTXT}
              onChange={(e) => testHandler({ qID: i, qTXT: e.target.value }, i)}
            />
          </div>
          <div className="flex flex-row flex-wrap justify-between gap-y-4">
            {Object.keys(questions[0].answers).map((a, j) => (
              <div className="max-w-[250px]">
                <input
                  type="radio"
                  name={i}
                  onClick={() => testHandler({ correct: j }, i)}
                />
                <input
                  className={`ml-1 w-5/6`}
                  type="text"
                  placeholder="enter an answer..."
                  value={questions[i]['answers'][j]['aTXT']}
                  onChange={(e) => {
                    let answers =  {...questions[i]['answers'], [j]: e.target.value }
                    testHandler({ answers }, i)
                  }}
                />
              </div>
            ))}
          </div>
        </>
      ))}
    </>
  )
}
