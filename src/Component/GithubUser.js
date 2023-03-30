import React from 'react';
import useGithubUser from "./useGithubUser";

const GithubUser = () => {
  const {users, error, isLoading, onFetch} = useGithubUser();

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
        <button onClick={onFetch}>ReFetch data</button>
    </div>
  );
};

export default GithubUser;