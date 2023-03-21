import React from 'react';
import Counter from './Counter';
import Hello from './Hello';

class App extends React.Component {
    render () {
        return (
            <div>
                <Hello />
                <Counter initValue={0} interval={1000} incrementAmount={1} />
            </div>
        )
    }
}

export default App;