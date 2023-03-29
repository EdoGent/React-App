import React from 'react';
import Counter from './Counter';
import GithubUser from './GithubUser';
import GithubUserList from './GithubUserList';
import Hello from './Hello';
import CarDetail from './CarDetail';

function App () {
    const initialData = {
        model: 'Mercedes',
        year: 2020,
        color: 'Grey'
    }
        return (
            <div>
                <Hello />
                <Counter />
                <GithubUserList />
                <GithubUser />
                <CarDetail initialData={initialData}/>
            </div>
        )
}

export default App;