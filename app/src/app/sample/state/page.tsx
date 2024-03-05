'use client'
import { useState } from "react";
import ButtonComp from './button.components';

export default function State() {
    const [count, setCount] = useState(0);

    const eventCountPlus = () => {
        setCount( count + 1);
    }

    return (
        <div>
            <p>카운트 : {count}</p>
            <ButtonComp
                count={ count }
                eventCountPlus={ eventCountPlus }
            ></ButtonComp>
        </div>
    );
}

