import React from 'react';
import Hello from './Hello';
import InteractiveWelcome from './InteractiveWelcome';
import Welcome from './Welcome';

class App extends React.Component {
    render () {
        return (
            <div>
                <Hello />
                <InteractiveWelcome />
            </div>
        )
    }
}

export default App;