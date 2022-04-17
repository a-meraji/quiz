import React from 'react'
import quiestions from '../data/questions.js'
import Test from '../components/test.jsx'
import {useSelector, useDispatch} from "react-redux";

function Exam() {
  const dispatch = useDispatch();
  const {questionIndex}= useSelector(state => state.exam);
  console.log(questionIndex);
  return (
    <>
      <Test question={quiestions[questionIndex]}/>
    </>
  )
}

export default Exam
