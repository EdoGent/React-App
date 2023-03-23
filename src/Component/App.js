import React from 'react';
import Hello from './Hello';
import InteractiveWelcome from './InteractiveWelcome';
import Welcome from './Welcome';
import UncontrolledLogin from './UncontrolledLogin';
import ToDoList from './ToDoList';

class App extends React.Component {
    render () {
        return (
            <div>
                <Hello />
                <InteractiveWelcome />
                <UncontrolledLogin />
                <ToDoList />
            </div>
        )
    }
}

export default App;