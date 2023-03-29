import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import ShowGithubUser from './ShowGithubUser';
import Hello from './Hello'
import Counter from './Counter'

function App () {
        return (
            <div>
                <div>
                    <Link to='/'>Counter</Link> | <Link to='/users'>Hello message</Link> | <Link to='/users/username'>Show Github user</Link>
                </div>
                <Routes>
                    <Route path='/' element={<Counter />} />
                    <Route path='/users' element={<Hello />} />
                    <Route path='/users/:username' element={<ShowGithubUser />} />
                </Routes>
            </div>
        )
}

export default App;