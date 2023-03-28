import React, { useEffect , useState } from 'react';

export default function ClickCounter({ onCounterChange }) {
   const [clicks, setClicks] = useState(0)

    useEffect(() => {
        onCounterChange(clicks)
    }, [clicks])

    return (
        <>
        <h1>Count : {clicks}</h1>
        <button onClick={() => setClicks(clicks + 1)}>Click to increment</button>
        </>
    )
}
