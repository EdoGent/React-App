import React from 'react';
import Counter from './Counter';
import GithubUser from './GithubUser';
import GithubUserList from './GithubUserList';
import Hello from './Hello';
import FilteredList from './FilteredList';

function App () {
    const object = [{name: 'John',id: 1,age: 25}, {name: 'Sara',id: 2,age: 12},{name: 'Mike', id: 3, age: 36}, {name: 'Kate',id: 4,age: 19}]
    return (
        <div>
            <Hello />
            <Counter />
            <GithubUser username='EdoGent' />
            <GithubUserList />
            <FilteredList list={object} />
        </div>
    )
}

export default App;