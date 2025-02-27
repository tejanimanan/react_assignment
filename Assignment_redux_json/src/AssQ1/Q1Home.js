import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setdec, setinc } from './reducer'
export default function Q1Home() {
  const val = useSelector(st=>st.xyz)
  const dispatch = useDispatch()
  return (
    <div>
      <h3>Q-1</h3>
      <p>Create a simple counter application using Redux for state management.
      Implementactions to increment and decrement the counter.</p>
      <button onClick={()=>dispatch(setdec(val))} className='btn btn-info'>-</button>
      <h2>{val}</h2>
      <button onClick={()=>dispatch(setinc(val))} className='btn btn-info'>+</button>
    </div>
  )
}
