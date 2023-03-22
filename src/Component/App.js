import React from 'react';
import ClickTracker from './ClickTracker';
import Hello from './Hello';

class App extends React.Component {
    render () {
        return (
            <div>
                <Hello />
                <ClickTracker />
            </div>
        )
    }
}

export default App;