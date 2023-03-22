import React from 'react';


export default class ClickCounter extends React.Component {
    state = {
        clicks : 0
    }
    IncrementCount = () => {
        this.setState({
            clicks: this.state.clicks + 1
        })
    }
    
    render () {
        return (
            <>
            <h1>Count : {this.state.clicks}</h1>
            <button onClick={this.IncrementCount}>Click to increment</button>
            </>
        )
    }
}