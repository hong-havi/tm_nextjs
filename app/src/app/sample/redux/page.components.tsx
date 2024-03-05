'use client'
import { useSelector, useDispatch } from './store/store';
import { increment, incrementByVal, setCountVal } from './store/module/counter'

export default function PageComp() {
    const dispatch = useDispatch();

    const count = useSelector((state) => state.counter.count);
    
    return (
        <div>
            {/* Render the button */}
            <div style={{ marginTop: '30px' }}>
                {/* Render the card */}
                {count}
            </div>
            <button onClick={ ()=> { dispatch(increment()) }}>
                Plus
            </button>
            <p>
                <input onChange={ (e) => {
                    dispatch(
                        setCountVal(e.target.value)
                    );
                }} />
                <button onClick={ ()=> { dispatch(incrementByVal()) }}>
                    PlusVal
                </button>            
            </p>
        </div>
    );
}


