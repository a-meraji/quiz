
import {useSelector, useDispatch} from "react-redux";
import { setAnswers } from "../redux/ducks/examSlice";

function Answer({ answer,i, qID, setSelected, selected }) {
  const dispatch = useDispatch();

    const {questionIndex}= useSelector(state => state.exam);
    function setAnswer(e){
      const aID = e.target.value===selected?null:e.target.id;
      aID===null?setSelected(null):setSelected(e.target.value);
      dispatch(setAnswers({qID, aID}));
    }

  return (
    <div>
      <input type="radio" id={i} name={questionIndex} checked={answer===selected} value={answer} onClick={setAnswer} />
      <label htmlFor={i}>{answer}</label>
    </div>
  )
}

export default Answer
/**
 



 */