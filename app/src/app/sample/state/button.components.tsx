'use client'

export default function ButtonComp(
    props : Readonly<{
        count: number,
        eventCountPlus : () => void
    }>
) {

    return (
        <div>
            <button 
                onClick={ () => { props.eventCountPlus() }}
            >Plus</button>
        </div>
    );
}


