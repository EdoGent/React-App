import React from "react";

export default class Welcome extends React.Component {
    static defaultProps = {
        name: 'Edoardo'
    } 
    
    render () {
        return (
            <>
                <p>"Welcome {this.props.name}!"</p>
                <p>"Your age is {this.props.age}!"</p>
            </>
        )
    }
}