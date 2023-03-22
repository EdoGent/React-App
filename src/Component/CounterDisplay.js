import React from 'react';

export default class CounterDispaly extends React.Component {
    render () {
        return (
            <h1>Count : {this.props.count}</h1>
        )
    }
}