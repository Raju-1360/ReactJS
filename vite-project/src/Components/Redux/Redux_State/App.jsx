import {useSelector, useDispatch} from 'react-redux'
import { increment, decrement } from '../../../App/features/counter/counterSlice'
export const Counter=()=>{
  const count= useSelector((state)=>state.counter.value)//read the data
  const dispatch =useDispatch();

  
  return(
        <>

     
      <h1>This is a app {count}  </h1>
      <button onClick={()=>dispatch(increment())}>+</button>
      <button onClick={()=>dispatch(decrement())}>-</button>
        
        
        </>


    )
}