import React, { useState } from 'react';

export default function Login () {
    const [data, setData] = useState({
        username: '',
        password: '',
        remember: false,
    })

    function handleInputChange (event) {
        const {name, type, value, checked} = event.target;
        
        setData((data) => {
            return {
                ...data,
                [name] : type === 'checkbox' ? checked : value
            }
        })
    }

    const {username, password} = data;

    const onLogin = ({username, password}) => {
        console.log({username, password});
    }

    const isDisabled = username === '' || password === ''
    
    return (
        <>
            <input name='username' value={data.username} onChange={handleInputChange}/>
            <input name='password' value={data.password} type='password' onChange={handleInputChange}/>
            <input name='remember' type='checkbox' checked={data.remember} onChange={handleInputChange}/>
            <button disabled={isDisabled} onClick={() => onLogin({username, password})}>Login</button>
        </>
    )
}