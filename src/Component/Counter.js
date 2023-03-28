import React from 'react';
import { useEffect , useState } from 'react';

export default function Counter () {
    const [count, setCount] = useState(0)
    
    useEffect(() => {
        const interval = setInterval(() => {
            setCount(count => count + 1)
        }, 1000);

        return () => clearInterval(interval);
    }, [])   

    return (
        <h1>Count : {count}</h1>
    )
}