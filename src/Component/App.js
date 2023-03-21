import React from 'react';
import Counter from './Counter';
import Hello from './Hello';

class App extends React.Component {
    render () {
        return (
            <div>
                <Hello />
                <Counter />
            </div>
        )
    }
}

export default App;