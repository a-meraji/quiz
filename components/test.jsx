import Answer from './Answer'

function Test({ exam, index }) {
  const { qTXT: question, qID, answers } = exam
  return (
    <div className='border-yellow-200 p-5 rounded-xl border-2 w-full'>
      <h3 className='text-lg'>{index}) {question}</h3>
      <div className="grid grid-cols-2 grid-rows-2 gap-4 mt-8 overflow-hidden">
        {answers?.hasOwnProperty(qID) && Object.values(answers).map((answer, i) => (
          <Answer
            key={i}
            answer={answer}
            i={i}
            qID={qID}
          />
        ))}
      </div>
    </div>
  )
}

export default Test
