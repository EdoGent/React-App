import React from 'react';
import GithubUserList from './GithubUserList';
import Hello from './Hello';
import {Routes, Route, Link} from 'react-router-dom';
import GithubUser from './GithubUser';
import ShowGithubUser from './ShowGithubUser';

function App () {
        return (
            <div>
                <Routes>
                    <Route path='/' element={<Hello />} />
                    <Route path='users' element={<GithubUserList />} >
                       <Route path=':username' element={<ShowGithubUser />} />
                    </Route>
                </Routes>
            </div>
        )
}

export default App;