import React from 'react';
import useGithubUser from "./useGithubUser";

const GithubUser = ({ username = 'EdoGent' }) => {
  const {data, loading} = useGithubUser(username);
  return (
    <div>
        {loading ? (<p>Loading...</p>) : (<h1>{data.name}</h1>)} 
    </div>
  );
};

export default GithubUser;