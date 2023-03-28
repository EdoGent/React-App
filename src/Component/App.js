import React from 'react';
import ClickCounter from './ClickCounter';
import Hello from './Hello';

class App extends React.Component {
    handleCounterChange = (clicks) => {
        console.log(`The counter is ${clicks}`);
    }
    render () {
        return (
            <div>
                <Hello />
                <ClickCounter onCounterChange={this.handleCounterChange}/>
                </div>
        )
    }
}

export default App;