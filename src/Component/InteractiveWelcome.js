import React from 'react';
import Welcome from './Welcome';

export default class InteractiveWelcome extends React.Component {
    state = {
        content: ''
    }

    handleInput = (event) => {
        this.setState({
            content: event.target.value
        })
    }
    
    render () {
        return (
            <>
                <input onChange={this.handleInput}/>
                <Welcome name={this.state.content}/>
            </>
        )
    }
}