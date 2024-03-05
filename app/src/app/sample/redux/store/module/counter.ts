// counter reducer
import { createSlice } from '@reduxjs/toolkit';
interface CountType {
    count: number;
    value: number;
}

const initialState: CountType = { 
    count: 0,
    value: 0
 }; // 초기 상태 정의

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: state => { state.count += 1 },
        decrement: state => { state.count -= 1 },
        incrementByVal: (state) => {
          state.count += state.value
        },
        setCountVal: (state, action) => {
            state.value = parseInt(action.payload)
        }
    },
});

export const { increment, decrement, incrementByVal, setCountVal } = counterSlice.actions; // 액션 생성함수
export default counterSlice.reducer; // 리듀서