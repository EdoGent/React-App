import React from 'react';
import useGithubUser from "./useGithubUser";

const GithubUser = () => {
  const {users, error, isLoading} = useGithubUser();

  return (
    <div>
        {isLoading && <p>Loading...</p>}
        {error && <h3>There is an error</h3>}
        {users && (
            <ul>
                {users.map((user) => (
                    user.login !== null && <li key={user.login}>{user.login}</li>
                ))}
            </ul>
        )}
    </div>
  );
};

export default GithubUser;