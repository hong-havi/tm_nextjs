'use client'

import { Provider } from "react-redux"
import store from './store';

import DetailPage from './detail.page';

export default function Home(){
    return (
        <div>
            <Provider store={store}>
                <DetailPage/>
            </Provider>
        </div>
    )
}