import React from 'react';
import Hello from './Hello';
import InteractiveWelcome from './InteractiveWelcome';
import welcome from './Welcome';
import UncontrolledLogin from './UncontrolledLogin';
import ToDoList from './ToDoList';
import Container from './Container';
import { LanguageContext } from './LanguageContext';
import { DisplayLanguage } from './DisplayLanguage';
import Welcome from './Welcome';
import {Route, Router, Routes} from 'react-router-dom'

function App () {
        return (
            <Container title='This is a title for my Application'>
                <Routes>
                    <Route path='/' element={<Welcome name='Jimmy' />} />
                </Routes>
            </Container>
        )
}

export default App;