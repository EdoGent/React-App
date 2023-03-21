import React from 'react';

export default class Counter extends React.Component {
 state = {
    count: this.props.initValue
 }

 constructor (props) {
    super(props)
    
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
        <h1>Count : {this.state.count}</h1>
    )
 }
}