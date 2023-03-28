import React from 'react';
import Counter from './Counter';
import GithubUser from './GithubUser';
import Hello from './Hello';

function App () {
        return (
            <div>
                <Hello />
                <Counter />
                <GithubUser username='EdoGent' />
            </div>
        )
}

export default App;