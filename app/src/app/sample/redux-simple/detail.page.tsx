'use client'

import { useDispatch, useSelector } from "react-redux"
import { increment, decrement} from "./defSlice"

export default function DetailPage(){
    const state = useSelector( (state) => state );
    const dispatch = useDispatch();
  return (
    <div>
        { state.counter.count }
        <button onClick={ ()=> { dispatch(increment()) }}>+</button>
        <button onClick={ ()=> { dispatch(decrement()) }}>-</button>
    </div>
  )
}