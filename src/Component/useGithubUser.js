import React from 'react';
import { useState, useEffect } from 'react';
import useSWR from 'swr'

const fetcher = (url) => fetch(url).then((res) => res.json())

const useGithubUser = () => {
    const { data, error, mutate } = useSWR(`https://api.github.com/users`, fetcher)

    function handleFetch () {
        mutate()
    }

    return {
        users: data,
        error, 
        isLoading: !data && !error,
        onFetch: handleFetch
    }
}

export default useGithubUser;