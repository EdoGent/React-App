import React from 'react';

export default class ClickTracker extends React.Component {
    state = {
        lastClicked: ''
    }

    handleTrack = (event) => {
        this.setState({
            lastClicked: event.target.name
        })
    }

    render () {
        return (
            <>
                <button name='1° bottone' onClick={this.handleTrack}>btn 1</button>
                <button name='2° bottone' onClick={this.handleTrack}>btn 2</button>
                <button name='3° bottone' onClick={this.handleTrack}>btn 3</button>
                {this.state.lastClicked !== '' && <h1>Hai premuto il {this.state.lastClicked}</h1>} 
            </>
        )
    }
} 