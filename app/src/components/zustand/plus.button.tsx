'use client'
import useCount from './zustand.store'

export default function PlusButton() {
    const { 
        eventPlus
    } = useCount();

    return (
        <div>
            <button 
                onClick={ () => { eventPlus() } }
            >+</button>
        </div>
    );
}

