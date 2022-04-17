import React,{useState} from 'react'
import { useForm } from 'react-hook-form'
import style from '../../styles/newExam.module.css'
import NewQuestions from '../../components/newQuestion'

export default function NewExam() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const onSubmit = (data) => console.log(data)
  return (
    <form className={style.container} onSubmit={handleSubmit(onSubmit)}>
      <input
      className={errors.examiner&&style.input_error}
        placeholder="your name..."
        type="text"
        name="examiner"
        id="examiner"
        {...register('examiner', { required: 'name is obligatory!' })}
      />
      {errors.examiner && <p className={style.error}>{errors.examiner.message}</p>}

      <input
      className={errors.username&&style.input_error}
        placeholder="your username..."
        type="text"
        name="username"
        id="username"
        {...register('username', { required: 'username is obligatory!' })}
      />
      {errors.username && <p className={style.error}>{errors.username.message}</p>}

      <div>
        <input type="checkbox" name="timeRestricted" id="timeRestricted" />
        <label htmlFor="timeRestricted">Add Time Restriction</label>
      </div>

      <input
      className={errors.name&&style.input_error}
        placeholder="exam name..."
        type="text"
        name="name"
        id="name"
        {...register('name', { required: 'exam name is obligatory!' })}
      />
      {errors.name && <p className={style.error}>{errors.name.message}</p>}

      <div>
        <label hrmlFor="startDate">start Date & Time</label>
        <br />
        <input
          type="datetime-local"
          name="startDate"
          id="startDate"
          {...register('startDate')}
        />
      </div>

      <div>
        <label hrmlFor="endDate">End Date & Time</label>
        <br />
        <input
          type="datetime-local"
          name="endDate"
          id="endDate"
          {...register('endDate')}
        />
      </div>

      <div>
        <input
          type="checkbox"
          name="isTimeRestrictedPerTest"
          id="isTimeRestrictedPerTest"
        />
        <label htmlFor="isTimeRestrictedPerTest">
          Add Time Restriction to each question
        </label>

        <input
          placeholder="0s"
          type="nubmer"
          id="timeRestrictedPerTes"
          name="timeRestrictedPerTes"
        />
      </div>

      <div>
        <input type="checkbox" name="isEditable" id="isEditable" />
        <label htmlFor="isEditable">
          Allow examinee access to previous quiestions
        </label>
      </div>

      <div>
        <input defaultChecked type="checkbox" name="isSuffle" id="isSuffle" />
        <label htmlFor="isSuffle">Shuffle order of questions and answers</label>
      </div>

      <NewQuestions />

      <button className={style.submit} type="submit">submit</button>
    </form>
  )
}
