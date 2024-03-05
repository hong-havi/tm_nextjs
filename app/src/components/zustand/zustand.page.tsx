'use client'
import useCount from './zustand.store'
import PlusButton from './plus.button'

export default function ZustandPage() {
    const { 
        count
    } = useCount();

    return (
        <div>
            카운트 {count}
            <PlusButton ></PlusButton>
        </div>
    );
}
