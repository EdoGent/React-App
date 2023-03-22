import React from 'react';
import Hello from './Hello';
import InteractiveWelcome from './InteractiveWelcome';
import Welcome from './Welcome';
import Login from './Login';

class App extends React.Component {
    render () {
        return (
            <div>
                <Hello />
                <InteractiveWelcome />
                <Login />
            </div>
        )
    }
}

export default App;