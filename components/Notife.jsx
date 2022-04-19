import React,{useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { clearNotife } from '../redux/ducks/layoutSlice';

export default function Notife() {
    const dispatch = useDispatch();
  const { isTriggerd, message,color } = useSelector((state) => state.layout.notife)

    useEffect(() => {
        if(isTriggerd){
            setTimeout(() => {
                dispatch(clearNotife())
            }, 3000);
        }
    },[isTriggerd])

  return (
    <div className={`transition-opacity duration-500 ${isTriggerd?"opacity-100":"opacity-0"} fixed top-2 right-2 w-3/4 max-w-[300px] rounded-xl py-5 px-8 ${color} text-white`}>
      {message}
      <style jsx>{`
      .success {
        background-color: #28a745;
      }
      .danger {
        background-color: #ff0125;
      }
      .errorr{
        background-color: #ff0125;
      }
      .warning {
        background-color: #ffc107;
      }
      .info {
        background-color: #159bd4;
      }`}</style>
    </div>
  )
}
