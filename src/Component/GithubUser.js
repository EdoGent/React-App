import React from 'react';
import useGithubUser from "./useGithubUser";

const GithubUser = ({ username }) => {
  const data = useGithubUser(username);

  return (
    <div>
      <h1>{data.name}</h1>
    </div>
  );
};

export default GithubUser;