import React from 'react';
import { useState } from 'react';

function useCounter (initialValue = 0) {
    const [count, setCount] = useState(initialValue);

    const handleIncrement = () => {
        setCount((count) => count + 1)
    }

    const handleDecrement = () => {
        setCount((count) => count - 1)
    }

    const handleReset = () => {
        setCount(initialValue)
    }

    return {
        count: count,
        onIncrement: handleIncrement,
        onDecrement: handleDecrement,
        onReset: handleReset
    }
}

export default function Counter ({initialValue = 0}) {
    const {count, onIncrement, onDecrement, onReset} = useCounter(initialValue)
    return (
        <div>
            <h1>Count : {count}</h1>
            <button onClick={onIncrement}>Increment</button>
            <button onClick={onDecrement}>Decrement</button>
            <button onClick={onReset}>Reset</button>
        </div>
    )
}