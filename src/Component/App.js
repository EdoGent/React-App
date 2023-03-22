import React from 'react';
import ClickCounter from './ClickCounter';
import Hello from './Hello';

class App extends React.Component {
    render () {
        return (
            <div>
                <Hello />
                <ClickCounter />
                </div>
        )
    }
}

export default App;