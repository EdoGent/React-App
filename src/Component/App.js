import React from 'react';
import Counter from './Counter';
import GithubUser from './GithubUser';
import GithubUserList from './GithubUserList';
import Hello from './Hello';

function App () {
        return (
            <div>
                <Hello />
                <GithubUser username='EdoGent' />
            </div>
        )
}

export default App;