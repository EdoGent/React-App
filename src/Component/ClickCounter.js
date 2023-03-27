import React, { useState } from 'react';

export default function ClickCounter() {
   const [clicks, setClicks] = useState(0)
    return (
        <>
        <h1>Count : {clicks}</h1>
        <button onClick={() => setClicks(clicks + 1)}>Click to increment</button>
        </>
    )
}
