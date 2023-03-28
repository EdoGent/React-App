import React from 'react';
import Counter from './Counter';
import GithubUser from './GithubUser';
import GithubUserList from './GithubUserList';
import Hello from './Hello';
import Login from './Login';

function App () {
        return (
            <div>
                <Hello />
                <Counter />
                <GithubUser username='EdoGent' />
                <GithubUserList />
                <Login />
            </div>
        )
}

export default App;