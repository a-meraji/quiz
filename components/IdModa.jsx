import { RiFileCopy2Line } from 'react-icons/ri'
import { IoCloseCircleSharp } from 'react-icons/io5'

function IdModal({ _id , setIdModal }) {
  return (
    <div className="fixed top-0 bottom-0 left-0 right-0 flex items-center justify-center bg-[#000000d2]">
      <div className="relative rounded-lg bg-white p-10">
        <IoCloseCircleSharp
          className="absolute top-3 left-3 h-5 w-5 fill-red-600 hover:fill-red-900"
          onClick={() => setIdModal({ _id, show: false })}
        />
        <h6>share this id with your examinee</h6>
        <div className="mx-auto mt-4 flex w-min items-center justify-center gap-x-2 rounded-lg bg-gray-300 py-2 px-5 text-gray-700 hover:bg-gray-400">
          <p>{_id}</p>
          <button onClick={() => navigator.clipboard.writeText(_id)}>
            <RiFileCopy2Line className="fill-gray-700" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default IdModal
