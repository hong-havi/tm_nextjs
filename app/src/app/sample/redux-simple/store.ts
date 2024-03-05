import { configureStore } from '@reduxjs/toolkit'
import countSlice from './defSlice'

export default configureStore({
    reducer: {
        counter : countSlice.reducer
    }
})