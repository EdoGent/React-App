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
                <GithubUser username='EdoGent' />
                <GithubUserList />
            </div>
        )
}

export default App;