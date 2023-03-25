import React from 'react';
import Hello from './Hello';
import InteractiveWelcome from './InteractiveWelcome';
import Welcome from './Welcome';
import UncontrolledLogin from './UncontrolledLogin';
import ToDoList from './ToDoList';
import Container from './Container';

class App extends React.Component {
    render () {
        return (
            <Container title='This is a title for my Application'>
                <Hello />
                <InteractiveWelcome />
                <UncontrolledLogin />
                <ToDoList />
            </Container>
        )
    }
}

export default App;