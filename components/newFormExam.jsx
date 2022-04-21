import style from '../styles/newExam.module.css'

function NewFormExam({ register, errors }) {
  return (
    <>
      <input
        className={errors.examiner && style.input_error}
        placeholder="your name..."
        type="text"
        name="examiner"
        id="examiner"
        {...register('examiner', { required: 'name is obligatory!' })}
      />
      {errors.examiner && (
        <p className={style.error}>{errors.examiner.message}</p>
      )}

      <input
        className={errors.username && style.input_error}
        placeholder="your username..."
        type="text"
        name="username"
        id="username"
        {...register('username', { required: 'username is obligatory!' })}
      />
      {errors.username && (
        <p className={style.error}>{errors.username.message}</p>
      )}

      <input
        className={errors.name && style.input_error}
        placeholder="exam name..."
        type="text"
        name="name"
        id="name"
        {...register('name', { required: 'exam name is obligatory!' })}
      />
      {errors.name && <p className={style.error}>{errors.name.message}</p>}

      <div>
        <input
          type="checkbox"
          name="timeRestricted"
          id="timeRestricted"
          {...register('timeRestricted')}
        />
        <label htmlFor="timeRestricted">Add Time Restriction</label>
      </div>

      <div>
        <label htmlFor="startDate">start Date & Time</label>
        <br />
        <input
          type="datetime-local"
          name="startDate"
          id="startDate"
          {...register('startDate')}
        />
      </div>

      <div>
        <label htmlFor="endDate">End Date & Time</label>
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
          {...register('isTimeRestrictedPerTest')}
        />
        <label htmlFor="isTimeRestrictedPerTest">
          Add Time Restriction to each question
        </label>

        <input
          placeholder="0"
          type="nubmer"
          id="timePerTest"
          name="timePerTest"
          {...register('timePerTest')}
        />
      </div>

      <div>
        <input
          type="checkbox"
          name="isEditable"
          id="isEditable"
          defaultChecked
          {...register('isEditable')}
        />
        <label htmlFor="isEditable">
          Allow examinee access to previous quiestions
        </label>
      </div>

      <div>
        <input
          defaultChecked
          type="checkbox"
          name="isSuffle"
          id="isSuffle"
          {...register('isShuffle')}
        />
        <label htmlFor="isSuffle">Shuffle order of questions and answers</label>
      </div>
    </>
  )
}

export default NewFormExam
