import { useDispatch } from 'react-redux'
import { resetExam } from '../redux/ducks/examSlice'
import { IoCloseCircleSharp } from 'react-icons/io5'

function ResultModal({ result, wrongAnswerds }) {
  const dispatch = useDispatch()
  const downloadTxtFile = () => {
    const element = document.createElement('a')
    const txt = wrongAnswerds.toString().replace(/,/g, '\n')
    const file = new Blob([txt], {
      type: 'text/plain',
    })
    element.href = URL.createObjectURL(file)
    element.download = 'myFile.txt'
    document.body.appendChild(element)
    element.click()
  }

  return (
    <div className="absolute top-0 bottom-0 right-0 left-0 flex h-screen w-screen justify-center bg-[#000000cc] align-middle">
      <div className="relative m-auto h-1/2 max-h-56 w-4/5 max-w-lg rounded-lg bg-white py-8 text-center">
        <IoCloseCircleSharp
          className="absolute top-3 left-3 h-5 w-5 fill-red-600"
          onClick={() => dispatch(resetExam())}
         />
         <div className='m-auto'>

        <h4 className='text-2xl'>Your Result</h4>
        <p className='text-blue-500 text-lg mt-2 mb-5'>{result}</p>
        <button className='py-4 px-1 bg-yellow-300 rounded-lg' disabled={wrongAnswerds.length === 0} onClick={downloadTxtFile}>
          download worng answerd questions
        </button>
         </div>
      </div>
    </div>
  )
}

export default ResultModal
