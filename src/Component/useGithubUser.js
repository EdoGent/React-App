import React from 'react';
import { useState, useEffect } from 'react';
import useSWR from 'swr'

const fetcher = (url) => fetch(url).then((res) => res.json())

const useGithubUser = () => {
    const { data, error } = useSWR(`https://api.github.com/users`, fetcher)
    return {
        users: data,
        error, 
        isLoading: !data && !error
    }
}

export default useGithubUser;