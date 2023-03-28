import React from 'react';
import Counter from './Counter';
import GithubUser from './GithubUser';
import GithubUserList from './GithubUserList';
import Hello from './Hello';

function App () {
        return (
            <div>
                <Hello />
                <Counter />
                <GithubUserList />
                <GithubUser />
            </div>
        )
}

export default App;