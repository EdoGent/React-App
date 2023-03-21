import React from "react";
import Age from "./Age";

export default class Welcome extends React.Component {
    static defaultProps = {
        name: 'Edoardo'
    } 
    
    render () {
        return (
            <>
                <p>"Welcome {this.props.name}!"</p>
                <Age age='20' />
            </>
        )
    }
}