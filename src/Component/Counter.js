import React from 'react';
import CounterDispaly from './CounterDisplay';

export default class Counter extends React.Component {
    state = {
        count: this.props.initValue
    }

 componentDidMount() {
    setInterval(() => {
        this.setState((state) => {
            return {
                count: state.count + this.props.incrementAmount
            }
        })
    }, this.props.interval)
 }

 render () {
    return (
        <CounterDispaly count={this.state.count}/>
    )
 }
}