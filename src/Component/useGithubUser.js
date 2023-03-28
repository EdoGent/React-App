import React from 'react';
import { useState, useEffect } from 'react';

const useGithubUser = (username) => {
    const [data, setData] = useState('');
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true);
        fetch(`https://api.github.com/users/${username}`)
            .then(response => {
                return response.json()
            })
            .then(json => {
                console.log(json)
                setData(json)
                setLoading(false);
            })
            .catch(err => {
                console.error(`Errore!!! ${err.message}`)
                setLoading(false);
            })
    }, [username])
    
    return {data, loading}
}

export default useGithubUser;