import React from 'react';
import ClickCounter from './ClickCounter';
import {Route, Router, Routes} from 'react-router-dom';
import Hello from './Hello';

function App () {
        return (
            <div>
                <Routes>
                    <Route path='/' element={<Hello />} />
                    <Route path='/counter' element={<ClickCounter />} />
                </Routes>
            </div>
        )
}

export default App;