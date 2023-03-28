import React from 'react';
import { useState, useEffect } from 'react';

const useGithubUser = (username) => {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch(`https://api.github.com/users/${username}`)
            .then(response => {
                return response.json()
            })
            .then(json => {
                console.log(json)
                setData(json)
            })
    }, [username])
    
    return {data}
}

export default useGithubUser;