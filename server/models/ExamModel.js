import mongoose from 'mongoose'

const examSchema = new mongoose.Schema(
  {
    examiner: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    exam: {
      type: Array,
      required: true,
    },
    startDate: {
      type: Date,
    },
    endDate: {
      type: Date,
    },
    isTimeRestricted: {
      type: Boolean,
      default: false,
    },
    timePerTest: {
      type: Object,
      default: { isRestricted: false, time: 0 },
    },

    isEditable: {
      type: Boolean,
      default: true,
    },
    isShuffle: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
)

let Exam = mongoose.models.exam || mongoose.model('exam', examSchema)
export default Exam
