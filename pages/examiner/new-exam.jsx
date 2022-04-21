import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import style from '../../styles/newExam.module.css'
import NewFormExam from '../../components/newFormExam'
import NewQuestions from '../../components/newQuestion'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { setLoading, setNotife } from '../../redux/ducks/layoutSlice'

const initialState = {
  qID: 0,
  qTXT: '',
  answers: {
    0: '',
    1: '',
    2: '',
    3: '',
  },
  correct: 0,
}

export default function NewExam() {
  const dispatch = useDispatch()
  const [questions, setQuestions] = useState([initialState])
  const [formComplited, setFormComplited] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors, isDirty, isSubmitting, isValid, isValidating },
  } = useForm({ mode: 'onChange' })
  const onSubmit = async (form) => {
    const qTXTEMpty = questions.some((q) => q.qTXT === '')
    if (!isValid || qTXTEMpty) return
    const newExam = {
      ...form,
      timePerTest: {
        isRestricted: form.isTimeRestrictedPerTest,
        time: form.timePerTest,
      },
      exam: questions,
    }
    dispatch(setLoading(true))
    const { data } = await axios.post(`/api/exams`, newExam)
    if (data) dispatch(setLoading(false))
    if (data.status === 'success') {
      dispatch(setNotife({ message: data.message, color: 'success' }))
      console.log("_id: ", data._id);
    } else {
      dispatch(setNotife({ message: data.message, color: 'danger' }))
    }
  }

  return (
    <form className={style.container} onSubmit={handleSubmit(onSubmit)}>
      {!formComplited ? (
        <NewFormExam register={register} errors={errors} />
      ) : (
        <>
          <NewQuestions questions={questions} setQuestions={setQuestions} />
          <div className="flex w-[90%] flex-row justify-between">
            <button
              className={`${style.input_success} min-w-[120px] py-1 px-3 text-sm`}
              onClick={() => {
                setQuestions((pre) => [...pre, initialState])
              }}
            >
              add another
            </button>
            {questions.length > 1 && (
              <button
                className={`${style.input_error}  min-w-[120px] py-1 px-3 text-sm`}
                onClick={() => {
                  setQuestions((pre) => {
                    let newQs = [...pre]
                    newQs.pop()
                    return newQs
                  })
                }}
              >
                delete the last
              </button>
            )}
          </div>
        </>
      )}

      {!formComplited && (
        <button
          disabled={!isValid || !isDirty}
          onClick={() => setFormComplited((pre) => !pre)}
        >
          continue
        </button>
      )}

      <button className={style.submit} type="submit">
        submit
      </button>
    </form>
  )
}
