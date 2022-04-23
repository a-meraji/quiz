import React, { useState } from 'react'
import { useRouter } from 'next/router'
function get_id() {
  const router = useRouter()
  const [_id, set_id] = useState('')

  function goToExam() {
    if (_id === '') return
    router.push('/exam/' + _id)
  }

  return (
    <div className="flex h-[70vh] w-full items-center justify-center">
      <div className="flex w-9/12 max-w-xl flex-col justify-center">
        <h1 className="text-center text-3xl">put your exam id here</h1>
        <input
          className="my-6 w-full rounded-lg bg-gray-100 p-3"
          type="text"
          placeholder="_id..."
          value={_id}
          onChange={(e) => set_id(e.target.value)}
        />
        <button
          onClick={goToExam}
          disabled={_id === ''}
          className="mx-auto w-32 rounded-lg bg-yellow-400 px-4 py-2 transition-colors hover:bg-yellow-500 hover:text-white"
        >
          find exam
        </button>
      </div>
    </div>
  )
}

export default get_id
