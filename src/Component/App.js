import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ShowGithubUser from './ShowGithubUser';
import Hello from './Hello'

function App () {
        return (
            <div>
                <Routes>
                    <Route path='/' element={<Hello />} />
                    <Route path='/users/:username' element={<ShowGithubUser />} />
                </Routes>
            </div>
        )
}

export default App;